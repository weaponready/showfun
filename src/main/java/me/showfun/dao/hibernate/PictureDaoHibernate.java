package me.showfun.dao.hibernate;

import me.showfun.dao.PictureDao;
import me.showfun.model.Picture;
import org.springframework.stereotype.Repository;

/**
 * Created by Jamy on 14-12-21.
 */
@Repository("pictureDao")
public class PictureDaoHibernate extends PaginatedDaoHibernate<Picture, Long> implements PictureDao {

    public PictureDaoHibernate() {
        super(Picture.class);
    }


}
