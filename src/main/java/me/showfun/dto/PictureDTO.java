package me.showfun.dto;

import java.io.Serializable;

/**
 * Created by Jamy on 14-12-28.
 */
public class PictureDTO implements Serializable {

    private Long id;
    private String url;
    private Long workId;
    private String description;
    private long width;
    private long height;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getWidth() {
        return width;
    }

    public void setWidth(long width) {
        this.width = width;
    }

    public long getHeight() {
        return height;
    }

    public void setHeight(long height) {
        this.height = height;
    }

    public Long getWorkId() {
        return workId;
    }

    public void setWorkId(Long workId) {
        this.workId = workId;
    }

    @Override
    public String toString() {
        return "PictureDTO{" +
                "id=" + id +
                ", url='" + url + '\'' +
                ", workId=" + workId +
                ", description='" + description + '\'' +
                ", width=" + width +
                ", height=" + height +
                '}';
    }
}
