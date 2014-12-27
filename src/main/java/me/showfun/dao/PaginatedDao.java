package me.showfun.dao;

import me.showfun.model.PaginatedList;
import me.showfun.model.User;
import me.showfun.service.DateFilter;
import org.apache.lucene.queryParser.ParseException;
import org.hibernate.Criteria;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


/**
/** <code>PaginatedDao</code> provides basic methods for pagination.
 * @author jgarcia
 *
 * @param <T>
 * @param <PK>
 */
public interface PaginatedDao<T, PK extends Serializable> extends GenericDao<T, PK> {

    /**
     * Get all objects of a type in a paginated way. Pagination params extracted from thePage
     * @param (i/o) thePage
     * @return the asked page
     */
    PaginatedList<T> getAll(DateFilter filter,PaginatedList<T> thePage);

    /**
     * Get all objects of a type owned by a user, in a paginated way.
     * @param owner
     * @param (i/o) thePage
     * @return
     */
    PaginatedList<T> getAll(User owner, DateFilter filter, PaginatedList<T> thePage);

    /**
     * Get the Rows based on the Query with a Map of Params, key is the Param Name.
     * @param thePage <code>PaginatedList<T></code> instance containing the desired page parameters.
     * @param query the HQL Query String.
     * @param countQuery the HQL Query String to count the total num of records.
     * @param params the Named Parameters.
     * @return <code>PaginatedList<T></code> instance.
     */
    PaginatedList<T> getListByQuery(PaginatedList<T> thePage, String query, String countQuery, LinkedHashMap<String, String> qryParams);

    PaginatedList<T> getListByCriteria(PaginatedList<T> thePage, Criteria criteria);

    /** Get the Rows based on the Query with a list of Params.
     * @param thePage <code>PaginatedList<T></code> instance containing the desired page parameters.
     * @param query the HQL Query String.
     * @param countQuery the HQL Query String to count the total num of records.
     * @param params the positional query parameters.
     * @return <code>PaginatedList<T></code> instance.
     */
    PaginatedList<T> getListByQuery(PaginatedList<T> thePage, String query, String countQuery, List<Object> params);

    /**
     * Generic method to search for an object in a paginated manner.
     *
     * @param searchTerm the search term
     * @param thePage the pagination params and the obtained page
     * @return a page of matched objects
     * @throws org.apache.lucene.queryParser.ParseException
     */

    PaginatedList<T> search(String searchTerm, PaginatedList<T> thePage) throws ParseException;

    /**
     * Generic method to search for an object in a paginated manner.
     *
     * @param searchTerm the search term
     * @param filter set of filters: field, value, to filter the query results. See Lucene Filters.
     * @param thePage the pagination params and the obtained page
     * @return a page of matched objects
     * @throws ParseException
     */
    PaginatedList<T> search(String searchTerm, Map<String, String> filter, PaginatedList<T> thePage) throws ParseException;

    PaginatedList<T> search(String searchTerm, DateFilter filter, PaginatedList<T> thePage) throws ParseException;

    /**
     * Generic method to search for an object, owned by a User, in a paginated manner.
     * @param owner the owner of the objects to search for.
     * @param searchTerm the search term
     * @param thePage the pagination params and the obtained page
     * @return a page of matched objects
     * @throws ParseException
     */
    PaginatedList<T> search(User owner, String searchTerm, DateFilter filter, PaginatedList<T> thePage) throws ParseException;


}
