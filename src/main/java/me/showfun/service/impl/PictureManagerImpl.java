package me.showfun.service.impl;

import me.showfun.dao.PictureDao;
import me.showfun.model.Picture;
import me.showfun.service.PictureManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Jamy on 14-12-21.
 */
@Service("pictureManager")
public class PictureManagerImpl extends GenericManagerImpl<Picture, Long> implements PictureManager{

    @Autowired
    public PictureManagerImpl(PictureDao pictureDao) {
        super(pictureDao);
    }
}
