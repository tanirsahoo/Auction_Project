package com.example.Auction.Controller;

import com.example.Auction.Model.Bid;
import com.example.Auction.Service.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bids")
public class BidController {
    @Autowired
    private BidService bidService;

    @GetMapping
    public List<Bid> findAll() {
        return bidService.findAll();
    }

    @GetMapping("/{id}")
    public Bid findById(@PathVariable Long id) {
        return bidService.findById(id);
    }

    @PostMapping("/place_bid")
    public Bid save(@RequestBody Bid bid) {
        return bidService.save(bid);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        bidService.deleteById(id);
    }
}
