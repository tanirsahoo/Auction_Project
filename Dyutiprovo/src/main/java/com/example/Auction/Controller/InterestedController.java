package com.example.Auction.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/interest")
public class InterestedController {
    @Autowired
    private InterestedService interestedservice ;

    @PostMapping("/enter")
    public Integer enter_auction(@RequestBody Interested interested){
        return InterestedService.savedetails(interested) ;
    }
}
