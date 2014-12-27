package me.showfun.model;


import org.hibernate.search.annotations.*;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import java.util.Date;


@Entity
@Table(name="document")
@NamedQueries({
    @NamedQuery(
            name="getFromUser",
            query = "from Document p where p.owner = :user"
    )
})

@Indexed
//@FullTextFilterDef(name="owned", impl=OwnedFilterFactory.class)
@XmlRootElement
public class Document extends BaseObject implements Owned {

    private static final long serialVersionUID = 1L;
    private Long id;
    private String title;
    private String filename;
    private User owner;
    private Long version;
    private String xml;
    private String documentId;
    private Date date;
    private boolean enabled;

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @DocumentId
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name="document_id")
    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String docId) {
        this.documentId = docId;
    }

    @Column(nullable=false)
    @Field(index= Index.YES)
    public Boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    @ManyToOne
    @IndexedEmbedded
    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner){
        this.owner = owner;
    }


    @Column(nullable=false,length=80)
    @Field
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(nullable=false)
    @Field
    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    @Column(nullable=false)
    @Temporal(TemporalType.DATE)
    @Field(store = Store.YES)
    @DateBridge(resolution = Resolution.DAY)
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @XmlTransient
    @Version
    @Field(index= Index.YES)
    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public void setXml(String xml) {
        this.xml = xml;
    }

    @XmlTransient
    @Lob
    @Column
    public String getXml() {
        return xml;
    }

    @Override
    public String toString() {
        return "Document [" + (title != null ? "title=" + title + ", " : "")
                + (filename != null ? "filename=" + filename + ", " : "")
                + (owner != null ? "owner=" + owner + ", " : "")
                + (version != null ? "version=" + version : "") + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result
                + ((filename == null) ? 0 : filename.hashCode());
        result = prime * result + ((owner == null) ? 0 : owner.hashCode());
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        Document other = (Document) obj;
        if (owner == null) {
            if (other.owner != null) {
                return false;
            }
        } else if (!owner.equals(other.owner)) {
            return false;
        }

        if (filename == null) {
            if (other.filename != null) {
                return false;
            }
        } else if (!filename.equals(other.filename)) {
            return false;
        }
        if (title == null) {
            if (other.title != null) {
                return false;
            }
        } else if (!title.equals(other.title)) {
            return false;
        }
        return true;
    }
}
