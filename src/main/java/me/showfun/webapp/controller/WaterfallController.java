package me.showfun.webapp.controller;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Jamy on 14-12-23.
 */
@Controller
@RequestMapping("category")
public class WaterfallController {

    @RequestMapping(value = "/{type}")
    public String show(Model model, @PathVariable("type") String type) {
        model.addAttribute("type", type);
        return StringUtils.isEmpty(type) ? "redirect:/home" : "album";
    }

}
