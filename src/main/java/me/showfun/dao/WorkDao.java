package me.showfun.dao;

import me.showfun.model.PaginatedList;
import me.showfun.model.Work;
import me.showfun.model.WorkType;

/**
 * Created by Jamy on 14-12-21.
 */
public interface WorkDao extends PaginatedDao<Work, Long> {

    public PaginatedList<Work> listByWorkType(PaginatedList pagination, WorkType workType);

}
