package com.example.Auction.Model;

import jakarta.persistence.*;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;
    private String name;
    private String description;
    private Double startingPrice;
    private String imageUrl;

    @OneToOne(mappedBy = "item")
    private Auction auction;

    // Getters and Setters
}
