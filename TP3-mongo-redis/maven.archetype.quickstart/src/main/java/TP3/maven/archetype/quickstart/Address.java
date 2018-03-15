package TP3.maven.archetype.quickstart;

import java.util.ArrayList;
import java.util.List;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Reference;



@Entity("address")
public class Address{

    @Id
    private  String city;
    @Reference 
    private  String street;
    @Reference 
    private String postCode;
    @Reference 
    private String country;
	@Reference
    private List<Person> persons = new ArrayList<Person>();

    public Address() {
        super();
    }

   

    
    @Override
	public String toString() {
		return "Address [city=" + city + ", street=" + street + ", postCode=" + postCode + ", country=" + country
				+ ", persons=" + persons + "]";
	}




	public String getPostCode() {
		return postCode;
	}




	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}




	public String getCountry() {
		return country;
	}




	public void setCountry(String country) {
		this.country = country;
	}




	public String getCity() {
		return city;
	}




	public String city() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }
    
    

    public List<Person> getPersons() {
		return persons;
	}




	public void setPerson(Person person) {
    	persons.add(person) ;
        
    }

	public void setPersons(List<Person> persons) {
		this.persons = persons;
	}


}
