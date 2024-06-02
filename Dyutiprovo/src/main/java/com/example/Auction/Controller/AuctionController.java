package com.example.Auction.Controller;

import com.example.Auction.Model.Auction;
import com.example.Auction.Service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auctions")
public class AuctionController {
    @Autowired
    private AuctionService auctionService;

    @GetMapping
    public List<Auction> findAll() {
        return auctionService.findAll();
    }

    @GetMapping("/{id}")
    public Auction findById(@PathVariable Long id) {
        return auctionService.findById(id);
    }

    @PostMapping
    public Auction save(@RequestBody Auction auction) {
        return auctionService.save(auction);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        auctionService.deleteById(id);
    }
}
