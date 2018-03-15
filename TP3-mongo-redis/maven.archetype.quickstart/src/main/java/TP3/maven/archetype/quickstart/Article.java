package TP3.maven.archetype.quickstart;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Reference;

@Entity("article")
public class Article {
	
	@Id
    private ObjectId id;
	@Reference
    private String name;
	@Reference
    private int stars;
    

    
    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

	@Override
	public String toString() {
		return "Article [id=" + id + ", name=" + name + ", stars=" + stars + "]";
	}

 
  

}
