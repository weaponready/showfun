package me.showfun.webapp.controller;

import me.showfun.dto.WaterfallItemDTO;
import me.showfun.service.WorkManager;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Jamy on 14-12-23.
 */
@Controller
@RequestMapping
public class WaterfallController {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private WorkManager workManager;

    @RequestMapping(value = "category/{type}")
    public String show(Model model, @PathVariable("type") String type) {
        model.addAttribute("type", type);
        return StringUtils.isEmpty(type) ? "redirect:/home" : "album";
    }

    @RequestMapping(value = "gallery/{workId}")
    public String gallery(@PathVariable("workId") Long workId, Model model){
        WaterfallItemDTO work = workManager.getGallery(workId);
        log.debug(work.toString());
        model.addAttribute("work", work);
        return "gallery";
    }


}
