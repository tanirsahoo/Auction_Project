package com.example.Auction.Service;

import com.example.Auction.Model.Bid;
import com.example.Auction.Repository.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BidService {
    @Autowired
    private BidRepository bidRepository;

    public List<Bid> findAll() {
        return bidRepository.findAll();
    }

    public Bid findById(Long id) {
        Optional<Bid> optionalBid = bidRepository.findById(id);
        return optionalBid.orElse(null);
    }

    public Bid save(Bid bid) {
        return bidRepository.save(bid);
    }

    public void deleteById(Long id) {
        bidRepository.deleteById(id);
    }
}
