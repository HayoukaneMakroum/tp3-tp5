package TP3.maven.archetype.quickstart;



import java.util.ArrayList;
import java.util.List;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Reference;

@Entity("person")
public class Person{
	
	@Id
	private String name;
	@Reference
    private Address address;
	@Reference
    private List<Article> articles = new ArrayList<Article>() ;

	public List<Article> getArticles() {
		return articles;
	}


	public void setArticles(List<Article> articles) {
		this.articles = articles;
	}
	
	public void setArticles(Article article) {
		this.articles.add(article) ;
	}


	@Override
	public String toString() {
		return "Person [name=" + name + ", address=" + address.toString() + ", articles=" + articles + "]";
	}


	public void setName(String name) {
		this.name = name ;
	}


	public void setAddress(Address address) {
		this.address = address ;
	}


	public String getName() {
		return name;
	}
	


	public Address getAddress() {
		return address;
	}
	
}
