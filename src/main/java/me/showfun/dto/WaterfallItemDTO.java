package me.showfun.dto;

import me.showfun.model.WorkType;

import java.io.Serializable;
import java.util.Set;

/**
 * Created by Jamy on 14-12-28.
 */
public class WaterfallItemDTO implements Serializable {

    private Long id;
    private WorkType type;
    private String memo;

    private String cover;

    private Long ownerId;
    private String avatar;

    private String createAt;

    private Set<PictureDTO> pictures;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public WorkType getType() {
        return type;
    }

    public void setType(WorkType type) {
        this.type = type;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getCreateAt() {
        return createAt;
    }

    public void setCreateAt(String createAt) {
        this.createAt = createAt;
    }

    public Set<PictureDTO> getPictures() {
        return pictures;
    }

    public void setPictures(Set<PictureDTO> pictures) {
        this.pictures = pictures;
    }

    @Override
    public String toString() {
        return "WaterfallItemDTO{" +
                "id=" + id +
                ", type=" + type +
                ", memo='" + memo + '\'' +
                ", cover='" + cover + '\'' +
                ", ownerId=" + ownerId +
                ", avatar='" + avatar + '\'' +
                ", createAt='" + createAt + '\'' +
                ", pictures=" + pictures +
                '}';
    }
}
