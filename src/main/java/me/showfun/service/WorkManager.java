package me.showfun.service;

import me.showfun.dao.WorkDao;
import me.showfun.model.PaginatedList;
import me.showfun.model.Work;
import me.showfun.model.WorkType;

/**
 * Created by Jamy on 14-12-21.
 */
public interface WorkManager extends GenericManager<Work, Long> {

    public void setWorkDao(WorkDao workDao);

    public PaginatedList<Work> listByWorkType(WorkType workType, PaginatedList pagination);
}
