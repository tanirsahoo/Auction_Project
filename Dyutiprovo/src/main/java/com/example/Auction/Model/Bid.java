package com.example.Auction.Model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Bid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bidId;
    private Double amount;
    private LocalDateTime bidTime;
    private Boolean isWinning;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "auction_id")
    private Auction auction;

    // Getters and Setters
}
