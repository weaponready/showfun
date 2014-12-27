package me.showfun.service.impl;

import me.showfun.dao.WorkDao;
import me.showfun.model.PaginatedList;
import me.showfun.model.Work;
import me.showfun.model.WorkType;
import me.showfun.service.WorkManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Jamy on 14-12-21.
 */
@Service("workManager")
public class WorkManagerImpl extends GenericManagerImpl<Work, Long> implements WorkManager {

    private WorkDao workDao;

    @Autowired
    @Override
    public void setWorkDao(WorkDao workDao) {
        super.dao = workDao;
        this.workDao = workDao;
    }

    @Override
    public PaginatedList<Work> listByWorkType(WorkType workType, PaginatedList pagination) {
        return workDao.listByWorkType(pagination, workType);
    }
}
