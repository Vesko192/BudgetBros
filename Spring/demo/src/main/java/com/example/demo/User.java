package com.example.demo;

public class User {
    
   /* private String fname; //Creating a variable to store first name, must be the same name as the one in the HTLML form
    private String lname; */
    private String username;

    public String getUsername() { //Creating a getter and setter for the variables, which are used to retrieve and set the values.
        return username;
    }
    public void setUsername(String username){
        this.username = username;
    }
    //
    /*public void setFname(String fname) {
        this.fname = fname;
    }
    public String getLname() {
        return lname;
    }
    //
    public void setLname(String lname) {
        this.lname = lname;
    }
    public String toString() {
        return "User [fname=" + fname + ", lname=" + lname + "]";
    }
    */

}
