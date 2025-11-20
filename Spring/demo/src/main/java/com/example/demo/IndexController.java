package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.servlet.http.HttpSession;
import org.springframework.ui.Model;



@Controller
public class IndexController {
    
    @GetMapping("/") //This will map the root URL to this method. When a user accesses the root URL, this method will be invoked.
    public String logIn(){

        
        return "login";

    }
    @PostMapping("/mainpage")
    public String mainPage(@ModelAttribute User user, Model model, HttpSession session){ //The @ModelAttribute annotation is used to bind the form data to the User object.
            
        System.out.println("username: " + user.getUsername());
        model.addAttribute("username", user.getUsername());
        session.setAttribute("username", user.getUsername()); //this line stores the username in the session

        return "Mainpage"; //This will return the index.html file located in src/main/resources/templates folder

    }
    @GetMapping("/mainpage")
    public String mainPageGet(Model model, HttpSession session) {
        String username = (String) session.getAttribute("username");
        model.addAttribute("username", username);
        System.out.println("mainPageGet username = " + username);
        return "Mainpage";
    }

    /*@PostMapping("/index") //This will map the root URL to this method. When a user accesses the root URL, this method will be invoked.
    public String index(@ModelAttribute User user, Model model){ //The @ModelAttribute annotation is used to bind the form data to the User object.

        System.out.println("Username: " + user.getUsername());
        model.addAttribute("username", user.getUsername());
        return "index"; //This will return the index.html file located in src/main/resources/templates folder

    }*/

    @PostMapping("/budget")
    public String budget(@ModelAttribute User user, Model model, HttpSession session ){ //The @ModelAttribute annotation is used to bind the form data to the User object.
        System.out.println("Budget page requested");

        String username = (String) session.getAttribute("username");

        model.addAttribute("username", username);
        System.out.println("Username: " + username);

        return "Budget";

    }
    @PostMapping("/income")
    public String income(@ModelAttribute User user, Model model, HttpSession session ){ //The @ModelAttribute annotation is used to bind the form data to the User object.
        System.out.println("Income page requested");

        String username = (String) session.getAttribute("username");

        model.addAttribute("username",username);
        System.out.println("Username: " + username);

        return "Income";
    }
    @PostMapping("/expenses")
    public String expenses(@ModelAttribute User user, Model model, HttpSession session ){ //The @ModelAttribute annotation is used to bind the form data to the User object.
        System.out.println("Expenses page requested");
        String username = (String) session.getAttribute("username");

        System.out.println("Username: " + username);
        model.addAttribute("username", username);

        return "Expenses";
    }
    @PostMapping("/billing")
    public String savings(@ModelAttribute User user, Model model, HttpSession session ){ //The  @ModelAttribute annotation is used to bind the form data to the User object.
        System.out.println("Savings page requested");
        String username = (String) session.getAttribute("username");

        System.out.println("Username: " + username);
        model.addAttribute("username", username);

        return "Billing";
    }


    @PostMapping("/login")
    public String login(){

        return "login";
    }
    @PostMapping("/signUp")
    public String signUp(){

        return "signup";
    }
    /*@PostMapping("/register")
    public String userRegistration(@ModelAttribute User user, Model model){ //The @ModelAttribute annotation is used to bind the form data to the User object.

        System.out.println(user.toString()); //Displaying the values entered in the form in the console
        //Validate
        System.out.println("First Name: " + user.getFname()); //Displaying the values entered in the form in the console
        System.out.println("Last Name: " + user.getLname());
        model.addAttribute("firstname", user.getFname());
        model.addAttribute("lastname", user.getLname());

        return "info"; //This will return the info.html file located in src/main/resources/templates folder

    }*/



}
