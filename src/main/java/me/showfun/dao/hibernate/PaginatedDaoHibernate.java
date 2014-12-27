package me.showfun.dao.hibernate;

import me.showfun.dao.PaginatedDao;
import me.showfun.model.PaginatedList;
import me.showfun.model.User;
import me.showfun.service.DateFilter;
import me.showfun.util.OwnedUtil;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.queryParser.ParseException;
import org.apache.lucene.search.BooleanClause;
import org.apache.lucene.search.Filter;
import org.apache.lucene.util.Version;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.search.FullTextSession;
import org.hibernate.search.Search;

import java.io.Serializable;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;


public class PaginatedDaoHibernate<T, PK extends Serializable> extends GenericDaoHibernate<T, PK> implements PaginatedDao<T, PK> {

    protected final StandardAnalyzer defaultAnalyzer;

    public PaginatedDaoHibernate(Class<T> persistentClass) {
        super(persistentClass);
        defaultAnalyzer = new StandardAnalyzer(Version.LUCENE_31);
    }

    /**
     * {@inheritDoc}
     */
    public PaginatedList<T> getAll(DateFilter filter, PaginatedList<T> thePage) {
    	return getAllByCriteria(null,filter, thePage);
    }

    /**
     * {@inheritDoc}
     */
    public PaginatedList<T> getAll(User owner, DateFilter filter, PaginatedList<T> thePage) {
        OwnedUtil.verifyIsOwned(persistentClass);
        return getAllByCriteria(owner, filter, thePage);
    }


    private PaginatedList<T> getAllByCriteria(User owner, DateFilter filter, PaginatedList<T> thePage) {
        Session session = getSessionFactory().getCurrentSession();
        // obtain all instances of a class belonging to owner:
        Criteria criteria = session.createCriteria(super.persistentClass);
        if (owner != null) {
        	criteria.add(Restrictions.eq("owner", owner));
        }

        addDateFilter(filter, criteria);

        // let's see how many instances are in total:
        criteria.setProjection(Projections.rowCount());
        Long count = (Long) criteria.uniqueResult();
        thePage.setTotal(count.intValue());
        // set criteria back to obtaining entities
        criteria.setProjection(null);
        criteria.setResultTransformer(Criteria.ROOT_ENTITY);

        if (thePage.getSortCriterion() != null) {
            Order order;
            if (thePage.getSortDir() == PaginatedList.SortOrder.ASCENDING) {
                order = Order.asc(thePage.getSortCriterion());
            } else {
                order = Order.desc(thePage.getSortCriterion());
            }
            criteria.addOrder(order);
        }
        criteria.setFirstResult(thePage.getFirstRecordIndex());
        criteria.setMaxResults(thePage.getSize());
        thePage.setList(criteria.list());
        return thePage;
    }

    protected void addDateFilter(DateFilter filter, Criteria criteria) {
        if (filter != null) {
            if (filter.getFrom() != null) {
                if (filter.getTo() != null) {
                    criteria.add(Restrictions.between(filter.getField(), filter.getFrom(), filter.getTo()));
                } else {
                    criteria.add(Restrictions.ge(filter.getField(), filter.getFrom()));
                }
            } else {
                if (filter.getTo() != null) {
                    criteria.add(Restrictions.le(filter.getField(), filter.getTo()));
                }
            }
        }
    }

    /**
     * {@inheritDoc}
     */
    public PaginatedList<T> getListByQuery(
            PaginatedList<T> thePage, String qry,
            String countQry, LinkedHashMap<String, String> qryParams) {
        Session session = getSessionFactory().getCurrentSession();
        Query query = session.createQuery(qry).setFirstResult(thePage.getFirstRecordIndex()).setMaxResults(thePage.getSize());
        if (qryParams != null) {
        	query.setProperties(qryParams);
        }
        thePage.setList(query.list());
        thePage.setTotal(getTotalCountOfRowsByQuery(countQry, qryParams));
        return thePage;
    }

    @Override
    public PaginatedList<T> getListByCriteria(PaginatedList<T> thePage, Criteria criteria) {
        // obtain all instances of a class belonging to owner:
        // let's see how many instances are in total:
        criteria.setProjection(Projections.rowCount());
        Long count = (Long) criteria.uniqueResult();
        thePage.setTotal(count.intValue());
        // set criteria back to obtaining entities
        criteria.setProjection(null);
        criteria.setResultTransformer(Criteria.ROOT_ENTITY);

        if (thePage.getSortCriterion() != null) {
            Order order;
            if (thePage.getSortDir() == PaginatedList.SortOrder.ASCENDING) {
                order = Order.asc(thePage.getSortCriterion());
            } else {
                order = Order.desc(thePage.getSortCriterion());
            }
            criteria.addOrder(order);
        }
        criteria.setFirstResult(thePage.getFirstRecordIndex());
        criteria.setMaxResults(thePage.getSize());
        thePage.setList(criteria.list());
        return thePage;
    }

    /**
     * {@inheritDoc}
     */
    public PaginatedList<T> getListByQuery(
            PaginatedList<T> thePage, String queryStr, String countQry,
            List<Object> params) {
        Session session = getSessionFactory().getCurrentSession();
        if (thePage.getSortCriterion() != null){
            if (thePage.getSortDir().equals(PaginatedList.SortOrder.ASCENDING)){
                queryStr = queryStr.concat(" order by " + Order.asc(thePage.getSortCriterion()).toString());
            }
            if (thePage.getSortDir().equals(PaginatedList.SortOrder.DESCENDING)){
                queryStr = queryStr.concat(" order by " + Order.desc(thePage.getSortCriterion()).toString());
            }
        }
        Query query = session.createQuery(queryStr)
                .setFirstResult(thePage.getFirstRecordIndex()).setMaxResults(thePage.getSize());
        setParameters(query, params);
        thePage.setList(query.list());
        thePage.setTotal(getTotalCountOfRowsByQuery(countQry, params));
        return thePage;
    }

    /**
     * Get the Total number of Rows by executing a count query.
     * @param countQueryString the HQL count Query String.
     * @param params the positional parameters
     * @return the total number rows fetched by the query.
     */
    private long getTotalCountOfRowsByQuery(String countQueryString, List<Object> params) {
        Session session = getSessionFactory().getCurrentSession();
        Query query = session.createQuery(countQueryString);
        setParameters(query, params);
        Long longValue = (Long) query.uniqueResult();
        return longValue;
    }

    /**
     * Get the Total number of Rows by executing a count query.
     * @param countQueryString the HQL count Query String.
     * @param params the Named parameters
     * @return the total number rows fetched by the query.
     */
    private long getTotalCountOfRowsByQuery(String countQueryString, LinkedHashMap<String, String> params) {
        Session session = getSessionFactory().getCurrentSession();
        Query query = session.createQuery(countQueryString);
        setParameters(query, params);
        Long longValue = (Long) query.uniqueResult();
        return longValue;
    }

    private void setParameters(Query query, LinkedHashMap<String, String> params) {
        if (params != null) {
            Iterator<Entry<String, String>> it = params.entrySet().iterator();
            while (it.hasNext()) {
                Entry<String, String> pair = it.next();
                query.setParameter(pair.getKey(), pair.getValue());
            }
        }
    }

    /**
     * Setting parameters from a list.
     * @param query the <code>org.hibernate.Query</code> instance.
     * @param params the Params.
     * @return the <code>org.hibernate.Query</code> instance with parameters bounded.
     */
    private Query setParameters(Query query, List<Object> params) {
        if (params != null) {
            Iterator<Object> iter = params.iterator();
            int position = 0;
            while (iter.hasNext()) {
                Object param = iter.next();
                query.setParameter(position, param);
                position++;
            }
        }
        return query;
    }

    /*
     * (non-Javadoc)
     *
     * @see es.jogaco.commons.dao.PaginatedDao#search(java.lang.String, java.lang.Class,
     * es.jogaco.commons.model.PaginatedList)
     */
    public PaginatedList<T> search(String searchTerm, PaginatedList<T> thePage) throws ParseException {
        org.apache.lucene.search.Query qry = HibernateSearchTools.generateQuery(searchTerm, super.persistentClass, getSessionFactory().getCurrentSession(), defaultAnalyzer);
        return doSearch(qry, null, thePage);
    }

    /**
     * {@inheritDoc}
     */
    public PaginatedList<T> search(String searchTerm, Map<String, String> filtering, PaginatedList<T> thePage) throws ParseException {
        org.apache.lucene.search.Query qry = HibernateSearchTools.generateQuery(searchTerm, super.persistentClass, getSessionFactory().getCurrentSession(), defaultAnalyzer);
        Filter filter = HibernateSearchTools.generateFilterUnparsed(filtering, BooleanClause.Occur.MUST);
        return doSearch(qry, filter, thePage);
    }

    /*
     * (non-Javadoc)
     *
     * @see es.jogaco.commons.dao.PaginatedDao#search(es.jogaco.commons.model.User, java.lang.String,
     * es.jogaco.commons.model.PaginatedList)
     */
    public PaginatedList<T> search(User owner, String searchTerm, DateFilter filter, PaginatedList<T> thePage)
            throws ParseException {
        org.apache.lucene.search.Query qry = HibernateSearchTools.generateQuery(owner, searchTerm, super.persistentClass, getSessionFactory().getCurrentSession(), defaultAnalyzer);
        Filter rangeFilter = null;
        if (filter != null) {
            rangeFilter = HibernateSearchTools.generateRangeFilter(filter);
        }

        return doSearch(qry, rangeFilter, thePage);
    }

    /*
     * (non-Javadoc)
     *
     * @see es.jogaco.commons.dao.PaginatedDao#search(es.jogaco.commons.model.User, java.lang.String,
     * es.jogaco.commons.model.PaginatedList)
     */
    public PaginatedList<T> search(String searchTerm, DateFilter filter, PaginatedList<T> thePage)
            throws ParseException {
        org.apache.lucene.search.Query qry = HibernateSearchTools.generateQuery(searchTerm, super.persistentClass, getSessionFactory().getCurrentSession(), defaultAnalyzer);
        Filter rangeFilter = null;
        if (filter != null) {
            rangeFilter = HibernateSearchTools.generateRangeFilter(filter);
        }

        return doSearch(qry, rangeFilter, thePage);
    }


    protected PaginatedList<T> doSearch(org.apache.lucene.search.Query qry, Filter filter, PaginatedList<T> thePage) {
        Session sess = getSessionFactory().getCurrentSession();
        FullTextSession txtSession = Search.getFullTextSession(sess);

        org.hibernate.search.FullTextQuery hibQuery = txtSession.createFullTextQuery(qry,
                super.persistentClass);
        if (filter != null) {
            hibQuery = hibQuery.setFilter(filter);
        }
        List list = hibQuery.setFirstResult(thePage.getFirstRecordIndex())
                .setMaxResults(thePage.getSize()).list();

        thePage.setTotal(hibQuery.getResultSize());
        thePage.setList(list);

        return thePage;
    }
}
