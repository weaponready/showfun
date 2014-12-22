package me.showfun.webapp.controller.rest;

import me.showfun.model.Work;
import me.showfun.service.WorkManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Jamy on 14-12-21.
 */
@RequestMapping("api/v1/work")
@RestController
public class WorkController {

    @Autowired
    private WorkManager workManager;

    @RequestMapping(method = RequestMethod.GET)
    public List<Work> list(){
        return workManager.getAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Work add(Work work){
        return workManager.save(work);
    }
}
