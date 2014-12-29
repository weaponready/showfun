package me.showfun.webapp.controller.rest;

import me.showfun.model.Message;
import me.showfun.model.PaginatedList;
import me.showfun.service.MessageManager;
import me.showfun.webapp.controller.BaseController;
import org.apache.lucene.queryParser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

/**
 * Created by Jamy on 14-12-29.
 */
@RestController
@RequestMapping("api/v1/message")
public class MessageController extends BaseController {

    @Autowired
    private MessageManager messageManager;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void save(Message message){
        messageManager.save(message);
    }

    @RequestMapping("all")
    public List<Message> getAll(){
        return messageManager.getAll();
    }

    @RequestMapping(method = RequestMethod.GET)
    public PaginatedList<Message> getPaginatedList(String query,PaginatedList<Message> pagination) throws ParseException {
        return messageManager.search(query, new HashMap<String, String>(),pagination);
    }
}
