package com.example.Auction.Service;

import com.example.Auction.Model.Auction;
import com.example.Auction.Repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuctionService {
    @Autowired
    private AuctionRepository auctionRepository;

    public List<Auction> findAll() {
        return auctionRepository.findAll();
    }

    public Auction findById(Long id) {
        Optional<Auction> optionalAuction = auctionRepository.findById(id);
        return optionalAuction.orElse(null);
    }

    public Auction save(Auction auction) {
        return auctionRepository.save(auction);
    }

    public void deleteById(Long id) {
        auctionRepository.deleteById(id);
    }
}
