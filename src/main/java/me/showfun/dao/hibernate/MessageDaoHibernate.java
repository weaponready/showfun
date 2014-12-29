package me.showfun.dao.hibernate;

import me.showfun.dao.MessageDao;
import me.showfun.model.Message;
import org.springframework.stereotype.Repository;

/**
 * Created by Jamy on 14-12-29.
 */
@Repository
public class MessageDaoHibernate extends PaginatedDaoHibernate<Message, Long> implements MessageDao {

    public MessageDaoHibernate() {
        super(Message.class);
    }

}
