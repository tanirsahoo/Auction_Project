package com.example.Auction.Model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Builder
@Data
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
}