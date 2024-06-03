package com.example.Auction.Controller;

import com.example.Auction.Model.User;
import com.example.Auction.Model.UserFeedback;
import com.example.Auction.Service.User_FeedbackService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class User_FeedbackController {
    @Autowired
    User_FeedbackService userfeedbackservice ;
    private final Logger LOGGER = LoggerFactory.getLogger(User_FeedbackController.class) ;

    @GetMapping("/feedbacktest")
    public String showMessage(){
        LOGGER.info("Inside GET request of Feeback");
        return "Welcome to feedback section." ;
    }
    @PostMapping("/feedbackin")
    public UserFeedback data_insertion(@RequestBody UserFeedback userfeedback){
        LOGGER.info("Inside POST request of Feeback");
        return userfeedbackservice.savefeedback(userfeedback);
    }
}
