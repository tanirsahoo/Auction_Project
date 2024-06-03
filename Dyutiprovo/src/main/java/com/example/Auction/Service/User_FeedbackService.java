package com.example.Auction.Service;


import com.example.Auction.Model.User;
import com.example.Auction.Model.UserFeedback;
import com.example.Auction.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class User_FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository ;
    public UserFeedback savefeedback(UserFeedback userfeedback){
        return feedbackRepository.save(userfeedback) ;
    }
}
