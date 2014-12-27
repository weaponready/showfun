package me.showfun.service;

import me.showfun.model.PaginatedList;
import org.apache.lucene.queryParser.ParseException;
import me.showfun.model.User;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * Generic Manager that talks to GenericDao to CRUD POJOs.
 *
 * <p>Extend this interface if you want typesafe (no casting necessary) managers
 * for your domain objects.
 *
 * @author <a href="mailto:matt@raibledesigns.com">Matt Raible</a>
 *  Updated by jgarcia: added full text search + reindexing
 * @param <T> a type variable
 * @param <PK> the primary key for that type
 */
public interface GenericManager<T, PK extends Serializable> {

    /**
     * Generic method used to get all objects of a particular type. This
     * is the same as lookup up all rows in a table.
     * @return List of populated objects
     */
    List<T> getAll();

    /**
     * Generic method used to get all objects of a particular type in a paginated way.
     *
     * @param thePage
     * @return the asked page
     */
    PaginatedList<T> getAll(DateFilter filter, PaginatedList<T> thePage);

    /**
     * Generic method to get an object based on class and identifier. An
     * ObjectRetrievalFailureException Runtime Exception is thrown if
     * nothing is found.
     *
     * @param id the identifier (primary key) of the object to get
     * @return a populated object
     * @see org.springframework.orm.ObjectRetrievalFailureException
     */
    T get(PK id);

    /**
     * Checks for existence of an object of type T using the id arg.
     * @param id the identifier (primary key) of the object to get
     * @return - true if it exists, false if it doesn't
     */
    boolean exists(PK id);

    /**
     * Generic method to save an object - handles both update and insert.
     * @param object the object to save
     * @return the updated object
     */
    T save(T object);

    /**
     * Generic method to delete an object
     * @param object the object to remove
     */
    void remove(T object);

    /**
     * Generic method to delete an object based on class and id
     * @param id the identifier (primary key) of the object to remove
     */
    void remove(PK id);

    /**
     * Generic method to search for an object.
     * @param searchTerm the search term
     * @param clazz type of class to search for.
     * @return a list of matched objects
     */
    List<T> search(String searchTerm, Class clazz);

    /**
     * Generic method to search for an object in a paginated manner.
     *
     * @param searchTerm the search term
     *
     * @param thePage
     *            the pagination params and the obtained page
     * @return a page of matched objects
     * @throws org.apache.lucene.queryParser.ParseException
     */
    PaginatedList<T> search(String searchTerm, DateFilter filter, PaginatedList<T> thePage) throws ParseException;

    /**
     * Generic method to search for an object in a paginated manner, with optional filtering of specific values in specific fields.
     *
     * @param q the search term
     *
     * @param thePage
     *            the pagination params and the obtained page
     * @param filter a set of fieldName, value pairs for the filtering
     * @return a page of matched objects
     * @throws ParseException
     */
    PaginatedList<T> search(String q, Map<String, String> filter, PaginatedList<T> thePage) throws ParseException;

    /**
     * Generic method to search for an object, owned by a User in a paginated manner.
     *
     * @param owner
     * @param searchTerm
     *            the search term
     * @param thePage
     *            the pagination params and the obtained page
     * @return a page of matched objects
     * @throws ParseException
     * @see me.showfun.model.Owned
     */
    PaginatedList<T> search(User owner, String searchTerm, DateFilter filter, PaginatedList<T> thePage) throws ParseException;




    /**
     * Generic method to regenerate full text index of the persistent class T
     */
    void reindex();

    /**
     * Generic method to regenerate full text index of all indexed classes
     *
     * @param async
     *            true to perform the reindexing asynchronously
     */
    void reindexAll(boolean async);
}
