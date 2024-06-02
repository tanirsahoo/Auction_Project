package com.example.Auction.Repository;

import com.example.Auction.Model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {
    // Additional query methods (if any) can be defined here
}
