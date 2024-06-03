package com.example.Auction.Controller;

import com.example.Auction.Model.Auction;
import com.example.Auction.Service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    
    @GetMapping("/{name}")
    public ResponseEntity<Auction> findByName(@PathVariable String title) {
        Optional<Auction> auction = auctionService.getAuctionByName(title);
        return auction.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.notFound().build());
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
