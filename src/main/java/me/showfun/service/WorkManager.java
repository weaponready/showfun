package me.showfun.service;

import me.showfun.dao.WorkDao;
import me.showfun.model.Work;

/**
 * Created by Jamy on 14-12-21.
 */
public interface WorkManager extends GenericManager<Work, Long> {

    public void setWorkDao(WorkDao workDao);
}
