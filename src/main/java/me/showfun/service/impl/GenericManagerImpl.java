package me.showfun.service.impl;

import me.showfun.dao.PaginatedDao;
import me.showfun.model.PaginatedList;
import me.showfun.service.DateFilter;
import me.showfun.service.GenericManager;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import me.showfun.model.User;
import org.apache.lucene.queryParser.ParseException;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * This class serves as the Base class for all other Managers - namely to hold
 * common CRUD methods that they might all use. You should only need to extend
 * this class when your require custom CRUD logic.
 * <p/>
 * <p>To register this class in your Spring context file, use the following XML.
 * <pre>
 *     &lt;bean id="userManager" class="me.showfun.service.impl.GenericManagerImpl"&gt;
 *         &lt;constructor-arg&gt;
 *             &lt;bean class="me.showfun.dao.hibernate.GenericDaoHibernate"&gt;
 *                 &lt;constructor-arg value="me.showfun.model.User"/&gt;
 *                 &lt;property name="sessionFactory" ref="sessionFactory"/&gt;
 *             &lt;/bean&gt;
 *         &lt;/constructor-arg&gt;
 *     &lt;/bean&gt;
 * </pre>
 * <p/>
 * <p>If you're using iBATIS instead of Hibernate, use:
 * <pre>
 *     &lt;bean id="userManager" class="me.showfun.service.impl.GenericManagerImpl"&gt;
 *         &lt;constructor-arg&gt;
 *             &lt;bean class="me.showfun.dao.ibatis.GenericDaoiBatis"&gt;
 *                 &lt;constructor-arg value="me.showfun.model.User"/&gt;
 *                 &lt;property name="dataSource" ref="dataSource"/&gt;
 *                 &lt;property name="sqlMapClient" ref="sqlMapClient"/&gt;
 *             &lt;/bean&gt;
 *         &lt;/constructor-arg&gt;
 *     &lt;/bean&gt;
 * </pre>
 *
 * @param <T>  a type variable
 * @param <PK> the primary key for that type
 * @author <a href="mailto:matt@raibledesigns.com">Matt Raible</a>
 *  Updated by jgarcia: added full text search + reindexing
 */
public class GenericManagerImpl<T, PK extends Serializable> implements GenericManager<T, PK> {
    /**
     * Log variable for all child classes. Uses LogFactory.getLog(getClass()) from Commons Logging
     */
    protected final Log log = LogFactory.getLog(getClass());

    /**
     * GenericDao instance, set by constructor of child classes
     */
    protected PaginatedDao<T, PK> dao;


    public GenericManagerImpl() {
    }

    public GenericManagerImpl(PaginatedDao<T, PK> genericDao) {
        this.dao = genericDao;
    }

    /**
     * {@inheritDoc}
     */
    public List<T> getAll() {
        return dao.getAll();
    }

    public PaginatedList<T> getAll(DateFilter filter, PaginatedList<T> thePage) {
        return dao.getAll(filter, thePage);
    }


    public PaginatedList<T> getAll(User owner, DateFilter filter, PaginatedList<T> thePage) {
        return dao.getAll(owner, filter, thePage);
    }


    /**
     * {@inheritDoc}
     */
    public T get(PK id) {
        return dao.get(id);
    }

    /**
     * {@inheritDoc}
     */
    public boolean exists(PK id) {
        return dao.exists(id);
    }

    /**
     * {@inheritDoc}
     */
    public T save(T object) {
        return dao.save(object);
    }

    /**
     * {@inheritDoc}
     */
    public void remove(T object) {
        dao.remove(object);
    }

    /**
     * {@inheritDoc}
     */
    public void remove(PK id) {
        dao.remove(id);
    }

    /**
     * {@inheritDoc}
     * <p/>
     * Search implementation using Hibernate Search.
     */
    @SuppressWarnings("unchecked")
    public List<T> search(String q, Class clazz) {
        if (q == null || "".equals(q.trim())) {
            return getAll();
        }

        return dao.search(q);
    }

    public PaginatedList<T> search(User owner, String q, DateFilter filter, PaginatedList<T> thePage) throws ParseException {
        if (q == null || "".equals(q.trim())) {
            return dao.getAll(owner, filter, thePage);
        }
        return dao.search(owner, q, filter, thePage);
    }

    public PaginatedList<T> search(String q, DateFilter filter, PaginatedList<T> thePage) throws ParseException {
        if (q == null || "".equals(q.trim())) {
            return getAll(filter, thePage);
        }
        return dao.search(q, filter, thePage);
    }

    /* (non-Javadoc)
     * @see es.jogaco.commons.service.GenericManager#search(java.lang.String, java.util.Map es.jogaco.commons.model.PaginatedList)
     */
    public PaginatedList<T> search(String q, Map<String, String> filter, PaginatedList<T> thePage) throws ParseException {
        if (q == null || "".equals(q.trim())) {
            return getAll(null, thePage);
        }
        return dao.search(q, filter, thePage);
    }

    /**
     * {@inheritDoc}
     */
    public void reindex() {
        dao.reindex();
    }

    /**
     * {@inheritDoc}
     */
    public void reindexAll(boolean async) {
        dao.reindexAll(async);
    }
}
