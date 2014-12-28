package me.showfun.webapp.controller.rest;

import me.showfun.dto.WaterfallItemDTO;
import me.showfun.model.PaginatedList;
import me.showfun.model.Work;
import me.showfun.model.WorkType;
import me.showfun.service.WorkManager;
import me.showfun.webapp.controller.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Jamy on 14-12-21.
 */
@RequestMapping("api/v1/work")
@RestController
public class WorkController extends BaseController {

    @Autowired
    private WorkManager workManager;


    @RequestMapping(method = RequestMethod.POST)
    public Work add(Work work) {
        return workManager.save(work);
    }

    @RequestMapping(value = "/{type}", method = RequestMethod.GET)
    public PaginatedList<WaterfallItemDTO> search(@PathVariable("type") WorkType type, PaginatedList page) {
        return workManager.listDTOByWorkType(type, page);
    }

}
