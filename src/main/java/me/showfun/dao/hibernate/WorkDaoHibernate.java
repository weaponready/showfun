package me.showfun.dao.hibernate;

import me.showfun.dao.WorkDao;
import me.showfun.model.Work;
import org.springframework.stereotype.Repository;

/**
 * Created by Jamy on 14-12-21.
 */
@Repository("workDao")
public class WorkDaoHibernate extends GenericDaoHibernate<Work, Long> implements WorkDao {

    public WorkDaoHibernate() {
        super(Work.class);
    }
}
