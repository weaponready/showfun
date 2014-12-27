package me.showfun.model;

import org.codehaus.jackson.annotate.JsonManagedReference;
import org.hibernate.search.annotations.DocumentId;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.FieldBridge;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.search.bridge.builtin.EnumBridge;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Jamy on 14-12-20.
 */
@Entity
@Table(name = "app_work")
@Indexed
public class Work extends BaseObject {

    private Long id;
    private WorkType type;
    private String memo;
    private User owner;
    private Picture cover;
    private Set<Picture> pictures = new HashSet<Picture>();
    private boolean publish;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @DocumentId
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Field(bridge = @FieldBridge(impl = EnumBridge.class))
    @Enumerated(EnumType.STRING)
    @Column()
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "owner_id")
    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cover_id")
    public Picture getCover() {
        return cover;
    }

    public void setCover(Picture cover) {
        this.cover = cover;
    }

    @OneToMany(cascade = {
            CascadeType.ALL
    }, mappedBy = "work",fetch = FetchType.EAGER)
    @JsonManagedReference("pictures")
    public Set<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(Set<Picture> pictures) {
        this.pictures = pictures;
    }

    @Override
    public String toString() {
        return null;
    }

    @Override
    public boolean equals(Object o) {
        return false;
    }

    @Override
    public int hashCode() {
        return 0;
    }

    public boolean isPublish() {
        return publish;
    }

    public void setPublish(boolean publish) {
        this.publish = publish;
    }
}
