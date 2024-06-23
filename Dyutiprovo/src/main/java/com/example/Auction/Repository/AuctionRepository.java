package com.example.Auction.Repository;

import com.example.Auction.Model.Auction;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuctionRepository extends JpaRepository<Auction, Long> {
    // Additional query methods (if any) can be defined here
    Optional<Auction> findByTitle(String title);
}
