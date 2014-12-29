package me.showfun.webapp.controller;

import com.google.common.net.HttpHeaders;
import me.showfun.config.Config;
import me.showfun.util.Servlets;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * Created by Jamy on 14-12-29.
 */
@Controller
@RequestMapping("download")
public class DownloadController extends BaseController {

    private static final Logger LOG = LoggerFactory.getLogger(DownloadController.class);

    @Autowired
    private Config config;


    @RequestMapping()
    public void download(@RequestParam(value = "f") String f, HttpServletResponse response, @RequestHeader(value = "Range", required = false) String range) {
        LOG.debug("url:{}", f);
        File file = new File(config.getImagePath() + f);
        if (file.exists() && file.canRead()) {
            copy(file, response, range);
        }
    }

    private void copy(File file, HttpServletResponse response, String range) {
        if (file.exists() && file.canRead()) {
            response.setHeader(HttpHeaders.ACCEPT_RANGES, "bytes");
            long position = 0;
            long tail = file.length() - 1;
            long length = file.length();

            if (StringUtils.isNotEmpty(range)) {
                response.setStatus(HttpStatus.PARTIAL_CONTENT.value());
                range = StringUtils.replace(range, "bytes=", "");
                String[] positions = StringUtils.split(range, "-");
                position = Long.parseLong(positions[0]);
                if (positions.length > 1) {
                    long position2 = Long.parseLong(positions[1]);
                    tail = position2 >= length ? tail : position2;
                }

            }
            long total = tail - position + 1;
            StringBuilder contentRange = new StringBuilder();
            contentRange.append("bytes ").append(position).append("-").append(tail).append("/").append(length);
            LOG.debug("Content-range:{}", contentRange.toString());
            response.setHeader(HttpHeaders.CONTENT_RANGE, contentRange.toString());
            response.setHeader(HttpHeaders.CONTENT_TYPE, "image/jpeg;charset=UTF-8");
            Servlets.setFileDownloadHeader(response, file.getName());
            response.setHeader(HttpHeaders.CONTENT_LENGTH, String.valueOf(total));
            try {
                byte[] buffer = new byte[2048];
                IOUtils.copyLarge(new FileInputStream(file), response.getOutputStream(), position, total, buffer);
            } catch (IOException e) {
                LOG.error(e.getMessage());
                e.printStackTrace();
            }
        } else {
            response.setStatus(HttpStatus.NOT_FOUND.value());
        }
    }
}
