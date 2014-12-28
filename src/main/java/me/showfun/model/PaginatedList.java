package me.showfun.model;

import java.util.List;

public class PaginatedList<T> {

    public interface Parameters {
        String SORT = "sort";
        String PAGE = "page";
        String ASC = "asc";
        String DESC = "desc";
        String DIRECTION = "dir";
        String PAGE_LENGTH = "plen";
    }

    static public enum SortOrder { ASCENDING, DESCENDING };

    /** Set the default page size **/
    static public int DEFAULT_PAGE_SIZE = 25;


    /** current page index, starts at 0 */
    private int page;

    /** number of results per page (number of rows per page to be displayed )  */
    private int size;

    /** total number of results (the total number of rows  ) */
    private long total;

    /** list of results (rows found ) in the current page */
    private List<T> list;

    /** default sorting order */
    private SortOrder sortDirection = SortOrder.ASCENDING;

    /** sort criteria (sorting property name) */
    private String sortCriterion;

    /**  default constructor **/
    public PaginatedList() {
        this.size = DEFAULT_PAGE_SIZE;
        this.page = 0;
    }

    public PaginatedList(int page, int size) {
        this.page = page;
        this.size = size;
    }

    /**Create <code>PaginatedListImpl</code> instance using the <code>HttpServletRequest</code> object.
     * @param size the page size - the total number of rows per page.
     */
    public PaginatedList(int size) {
        this.size = size != 0 ? size : DEFAULT_PAGE_SIZE ;
        page = 0;
    }

    public int getFirstRecordIndex() {
        return page * size;
    }

    /** return the index.
     * @return the index.
     */
    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> results) {
        this.list = results;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    /** return the total number of pages for the total number of rows.
     * @return the total.
     */
    public int getTotalPages() {
        return (int)Math.ceil(((double) total)/ size);
    }

    public int getPageNumber() {
        return page + 1;
    }

    public String getSortCriterion() {
        return sortCriterion;
    }

    public SortOrder getSortDir() {
        return sortDirection;
    }

    public void setSortCriterion(String sortCriterion) {
        this.sortCriterion = sortCriterion;
    }

    public void setSortDir(SortOrder sortDirection) {
        this.sortDirection = sortDirection;
    }

    public void setSortCriterion(String tableId, String sortCriterion) {
        this.sortCriterion = sortCriterion;
    }

}
