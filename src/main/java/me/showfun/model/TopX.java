package me.showfun.model;

import org.hibernate.search.annotations.DocumentId;

import javax.persistence.*;

/**
 * Created by Jamy on 14-12-29.
 */
@Entity
@Table(name = "app_topx")
public class TopX extends BaseObject {

    private Long id;
    private String url;
    private String title;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "TopX{" +
                "url='" + url + '\'' +
                ", title='" + title + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if(this == o) return true;
        if(!o.getClass().equals(this.getClass())) return false;
        return this.url.equals(((TopX) o).getUrl());
    }

    @Override
    public int hashCode() {
        return url.hashCode();
    }
}
