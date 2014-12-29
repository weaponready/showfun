package me.showfun.webapp.controller.rest;

import me.showfun.model.TopX;
import me.showfun.service.TopXManager;
import me.showfun.webapp.controller.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Jamy on 14-12-29.
 */
@RestController
@RequestMapping("api/v1/topx")
public class TopXController extends BaseController {

    @Autowired
    private TopXManager topXManager;

    @RequestMapping
    public List<TopX> showTopX(){
        return topXManager.getAll();
    }
}
