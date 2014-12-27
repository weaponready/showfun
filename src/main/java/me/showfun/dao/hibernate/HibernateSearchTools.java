package me.showfun.dao.hibernate;

import me.showfun.service.DateFilter;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.document.DateTools;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.Term;
import org.apache.lucene.queryParser.MultiFieldQueryParser;
import org.apache.lucene.queryParser.ParseException;
import org.apache.lucene.search.*;
import org.apache.lucene.util.Version;
import org.hibernate.Session;
import org.hibernate.search.FullTextSession;
import org.hibernate.search.MassIndexer;
import org.hibernate.search.Search;
import org.hibernate.search.SearchFactory;
import org.hibernate.search.indexes.IndexReaderAccessor;
import me.showfun.model.User;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Utility class to generate lucene queries for hibernate search and perform full reindexing.
 *
 * @author jgarcia
 */
class HibernateSearchTools {
    protected static final Log log = LogFactory.getLog(HibernateSearchTools.class);

    /**
     * Generates a lucene query to search for a given term in all the indexed fields of a class
     *
     * @param searchTerm the term to search for
     * @param searchedEntity the class searched
     * @param sess the hibernate session
     * @param defaultAnalyzer the default analyzer for parsing the search terms
     * @return
     * @throws ParseException
     */
    public static Query generateQuery(String searchTerm, Class searchedEntity, Session sess, Analyzer defaultAnalyzer) throws ParseException {
        Query qry = null;

        if (searchTerm.equals("*")) {
            qry = new MatchAllDocsQuery();
        } else {
            // Search in all indexed fields

            IndexReaderAccessor readerAccessor = null;
            IndexReader reader = null;
            try {
                FullTextSession txtSession = Search.getFullTextSession(sess);

                // obtain analyzer to parse the query:
                Analyzer analyzer;
                if (searchedEntity == null) {
                    analyzer = defaultAnalyzer;
                } else {
                    analyzer = txtSession.getSearchFactory().getAnalyzer(searchedEntity);
                }

                // search on all indexed fields: generate field list, removing internal hibernate search field name: _hibernate_class
                // TODO: possible improvement: cache the fields of each entity
                SearchFactory searchFactory = txtSession.getSearchFactory();
                readerAccessor = searchFactory.getIndexReaderAccessor();
                reader = readerAccessor.open(searchedEntity);
                Collection<String> fieldNames = reader.getFieldNames(IndexReader.FieldOption.INDEXED);
                fieldNames.remove("_hibernate_class");
                String[] fnames = new String[0];
                fnames = fieldNames.toArray(fnames);

                // To search on all fields, search the term in all fields
                String[] queries = new String[fnames.length];
                for (int i = 0; i < queries.length; ++i) {
                    queries[i] = searchTerm;
                }

                qry = MultiFieldQueryParser.parse(Version.LUCENE_35, queries, fnames, analyzer);
            } finally {
                if (readerAccessor != null && reader != null) {
                    readerAccessor.close(reader);
                }
            }
        }
        return qry;
    }

    /**
     * Generates a boolean lucene query for a given owned entity (implements Owner interface), in which
     *      the results must belong to one user, and the searched term is searched as an OR condition in
     *      all indexed fields of the entity
     * @param owner
     * @param searchTerm
     * @param searchedEntity
     * @param sess
     * @param defaultAnalyzer
     * @return
     * @throws ParseException
     */
    public static Query generateQuery(User owner, String searchTerm, Class searchedEntity, Session sess, Analyzer defaultAnalyzer) throws ParseException {
        TermQuery owned = new TermQuery(new Term("owner.id",Long.toString(owner.getId())));
        BooleanQuery ownedEntities = new BooleanQuery();
        ownedEntities.add(owned, BooleanClause.Occur.MUST);

        Query qry = null;
        if (searchTerm.equals("*")) {
        } else {
            qry = generateQuery(searchTerm, searchedEntity, sess, defaultAnalyzer);
            ownedEntities.add(qry, BooleanClause.Occur.MUST);
        }

        return ownedEntities;
    }

    /**
     * Generates a boolean query filter for a lucene search. Lucene results can then be filtered to
     *  meet a condition. Typical usage: restrict results to those owned by a user, or enabled
     *  The boolean query filter will be of type AND, OR, NOT (same type for all the filtering terms)
     *
     * @param filtering the filtering terms
     * @param occurs any of BooleanClause.Occur.MUST (AND),
     *                      BooleanClause.Occur.SHOULD (OR),
     *                      BooleanClause.Occur.MUST_NOT (NOT)
     * @return the lucene filter to apply to a full text search
     * @throws ParseException
     */
    public static Filter generateFilterUnparsed(Map<String, String> filtering, BooleanClause.Occur occurs) throws ParseException {
        TermQuery[] filterTerms = new TermQuery[filtering.size()];
        int i = 0;
        for (Map.Entry<String, String> entry : filtering.entrySet()) {
            filterTerms[i] = new TermQuery(new Term(entry.getKey(), entry.getValue()));
            ++i;
        }
        Query qry = null;
        if (filterTerms.length == 1) {
            qry = filterTerms[0];
        } else {
            BooleanQuery booleanQry = new BooleanQuery();
            for (TermQuery filterTerm : filterTerms) {
                booleanQry.add(filterTerm, occurs);
            }
            qry = booleanQry;
        }

        QueryWrapperFilter filter = new QueryWrapperFilter(qry);
        return filter;
    }

    /**
     * Generates a boolean query filter for a lucene search. Lucene results can then be filtered to
     *  meet a condition. Typical usage: restrict results to those owned by a user, or enabled
     *  Each filtering term will have its own boolean clause type specified: filtering term "i" will have occurs boolean type "i"
     *
     * @param filtering
     * @param occurs
     * @return
     * @throws ParseException
     */
    public static Filter generateFilterUnparsed(LinkedHashMap<String, String> filtering, BooleanClause.Occur[] occurs) throws ParseException {
        if (filtering == null || occurs == null) {
            throw new IllegalArgumentException("filtering terms and/or occurs conditions is/are null");
        }
        if (filtering.size() != occurs.length) {
            throw new IllegalArgumentException("Different size in filtering terms and occurs conditions");
        }
        TermQuery[] filterTerms = generateTermQueries(filtering);
        Query qry = null;
        if (filterTerms.length == 1) {
            qry = filterTerms[0];
        } else {
            BooleanQuery booleanQry = new BooleanQuery();
            int i = 0;
            for (TermQuery filterTerm : filterTerms) {
                booleanQry.add(filterTerm, occurs[i]);
                ++i;
            }
            qry = booleanQry;
        }

        QueryWrapperFilter filter = new QueryWrapperFilter(qry);
        return filter;
    }

    private static TermQuery[] generateTermQueries(LinkedHashMap<String, String> filtering) {
        TermQuery[] filterTerms = new TermQuery[filtering.size()];
        int j = 0;
        for (Iterator<String> it = filtering.keySet().iterator(); it.hasNext(); ) {
            String key = it.next();
            String val = filtering.get(key);
            filterTerms[j] = new TermQuery(new Term(key, val));
            ++j;
        }
        return filterTerms;
    }

    public static BooleanQuery generateBooleanQuery(LinkedHashMap<String, String> filtering, BooleanClause.Occur[] occurs) throws ParseException {
        if (filtering == null || occurs == null) {
            throw new IllegalArgumentException("filtering terms and/or occurs conditions is/are null");
        }
        if (filtering.size() != occurs.length) {
            throw new IllegalArgumentException("Different size in filtering terms and occurs conditions");
        }

        TermQuery[] filterTerms = generateTermQueries(filtering);

        BooleanQuery booleanQry = new BooleanQuery();
        int i = 0;
        for (TermQuery filterTerm : filterTerms) {
            booleanQry.add(filterTerm, occurs[i]);
            ++i;
        }

        return booleanQry;
    }



    /**
     * Regenerates the index for a given class
     *
     * @param clazz the class
     * @param sess the hibernate session
     */
    public static void reindex(Class clazz, Session sess) {
        FullTextSession txtSession = Search.getFullTextSession(sess);
        MassIndexer massIndexer = txtSession.createIndexer(clazz);
        try {
            massIndexer.startAndWait();
        } catch (InterruptedException e) {
            log.error("mass reindexing interrupted: " + e.getMessage());
        } finally {
            txtSession.flushToIndexes();
        }
    }

    /**
     * Regenerates all the indexed class indexes
     *
     * @param async true if the reindexing will be done as a background thread
     * @param sess the hibernate session
     */
    public static void reindexAll(boolean async, Session sess) {
        FullTextSession txtSession = Search.getFullTextSession(sess);
        MassIndexer massIndexer = txtSession.createIndexer();
        massIndexer.purgeAllOnStart(true);
        try {
            if (!async) {
                massIndexer.startAndWait();
            } else {
                massIndexer.start();
            }
        } catch (InterruptedException e) {
            log.error("mass reindexing interrupted: " + e.getMessage());
        } finally {
            txtSession.flushToIndexes();
        }
    }

    public static Filter generateRangeFilter(DateFilter rangeFilter) {
        TermRangeQuery qry = generateRangeQuery(rangeFilter);
        QueryWrapperFilter filter = new QueryWrapperFilter(qry);
        return filter;
    }

    public static TermRangeQuery generateRangeQuery(DateFilter rangeFilter) {
        if (rangeFilter.getField() == null) {
            return null;
        }
        String dateFrom = null;
        String dateTo = null;
        if (rangeFilter.getFrom() != null) {
            dateFrom = DateTools.dateToString(rangeFilter.getFrom(), DateTools.Resolution.DAY);
        }
        if (rangeFilter.getTo() != null) {
            dateTo = DateTools.dateToString(rangeFilter.getTo(), DateTools.Resolution.DAY);
        }
        TermRangeQuery qry = new TermRangeQuery(rangeFilter.getField(), dateFrom, dateTo, true, true);
        return qry;
    }
}
