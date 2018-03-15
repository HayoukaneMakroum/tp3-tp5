package TP3.maven.archetype.quickstart;

import java.net.UnknownHostException;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.MongoClient;
/**
 * Hello world!
 *
 */
public class App 
{
   
       
    
    public static void main( String[] args ) throws UnknownHostException
    {
        Morphia morphia = new Morphia();    
        MongoClient mongo = new MongoClient();
        morphia.map(Person.class).map(Address.class);
        Datastore ds = morphia.createDatastore(mongo, "my_database");
        
        Person p1 = new Person();
        p1.setName("Sara");
        Person p2 = new Person();
        p2.setName("Sara2");
        Address address = new Address();
        address.setStreet("35 av charles foulon");
        address.setCity("Rennes");
        address.setPostCode("35700");
        address.setCountry("France");
        ds.save(address) ;
        //set address
        p1.setAddress(address);
        p2.setAddress(address);
        // Save the POJO
        ds.save(p1);
        ds.save(p2);
        Article article= new Article();
        article.setStars(4);
        article.setName("art 1");
        ds.save(article) ;
        p1.setArticles(article);
        p2.setArticles(article);
        for (Person e : ds.find(Person.class))
             System.err.println(e.toString());
        System.out.println( " LOL");

    }
    

}
