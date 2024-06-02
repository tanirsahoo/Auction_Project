package com.example.Auction.Model;

import jakarta.persistence.*;


import java.time.LocalDateTime;
import java.util.Set;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String username;
    private String password;
    private String email;
    private LocalDateTime createdAt;
    //private LocalDateTime updatedAt;
    private String role;//bidder or host

    @OneToMany(mappedBy = "user")
    private Set<Auction> auctions;

    @OneToMany(mappedBy = "user")
    private Set<Bid> bids;

    // Getters and Setters
}
