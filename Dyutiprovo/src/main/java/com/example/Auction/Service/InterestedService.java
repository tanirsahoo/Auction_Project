package com.example.Auction.Service;

import com.example.Auction.Model.Interested;
import com.example.Auction.Repository.InterestedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InterestedService {

    @Autowired
    private InterestedRepository interestedRepository ;

    public Interested savedetails(Interested interested) {
        return InterestedRepository.save(interested) ;
    }
}
