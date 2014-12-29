package me.showfun.dao.hibernate;

import me.showfun.dao.TopXDao;
import me.showfun.model.TopX;
import org.springframework.stereotype.Repository;

/**
 * Created by Jamy on 14-12-29.
 */
@Repository
public class TopXDaoHibernate extends PaginatedDaoHibernate<TopX, Long> implements TopXDao {

    public TopXDaoHibernate() {
        super(TopX.class);
    }
}
