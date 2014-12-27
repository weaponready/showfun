package me.showfun.dao.hibernate;

import me.showfun.dao.WorkDao;
import me.showfun.model.PaginatedList;
import me.showfun.model.Work;
import me.showfun.model.WorkType;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

/**
 * Created by Jamy on 14-12-21.
 */
@Repository("workDao")
public class WorkDaoHibernate extends PaginatedDaoHibernate<Work, Long> implements WorkDao {

    public WorkDaoHibernate() {
        super(Work.class);
    }

    @Override
    public PaginatedList<Work> listByWorkType(PaginatedList pagination, WorkType workType) {
        Session session = getSessionFactory().getCurrentSession();
        // obtain all instances of a class belonging to owner:
        Criteria criteria = session.createCriteria(super.persistentClass);
        if(workType!=WorkType.ALL){
            criteria.add(Restrictions.eq("type", workType));
        }
        return getListByCriteria(pagination, criteria);
    }
}
