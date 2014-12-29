package me.showfun.service.impl;

import me.showfun.dao.TopXDao;
import me.showfun.model.TopX;
import me.showfun.service.TopXManager;
import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Jamy on 14-12-29.
 */
@Service
public class TopXManagerImpl extends GenericManagerImpl<TopX, Long> implements TopXManager{

    private TopXDao topXDao;
    @Autowired
    private Mapper dozer;

    @Autowired
    public TopXManagerImpl(TopXDao dao) {
        super(dao);
        this.topXDao = dao;
    }

}
