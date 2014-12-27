package me.showfun.service;

import java.util.Date;

/**
 * Class to specify a date filter for a search query: field, "from" value, "to" value.
 *
 * @author jgarcia
 */
public class DateFilter {
    private String field;
    private Date from;
    private Date to;

    /**
     * Constructs a DateFilter, for a given field, "from" date, "to" date
     * @param field
     * @param from
     * @param to
     */
    public DateFilter(String field, Date from, Date to) {
        this.field = field;
        this.from = from;
        this.to = to;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public Date getFrom() {
        return from;
    }

    public Date getTo() {
        return to;
    }

}
