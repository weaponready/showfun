package me.showfun.service.impl;

import me.showfun.dao.MessageDao;
import me.showfun.model.Message;
import me.showfun.service.MessageManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Jamy on 14-12-29.
 */
@Service
public class MessageManagerImpl extends GenericManagerImpl<Message, Long> implements MessageManager {

    private MessageDao messageDao;

    @Autowired
    public MessageManagerImpl(MessageDao dao) {
        super(dao);
        this.messageDao = dao;
    }


}
