package com.example.Auction.Model;

import jakarta.persistence.Entity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Data
public class Interested {
    private Long userId ;
    private Long auctionId ;
}
