package com.example.Auction.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class UserFeedback {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long feedbackID ;
    private String email_id ;
    private String username ;
    private String feedback ;
}
