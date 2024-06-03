package com.example.Auction.Repository;

import com.example.Auction.Model.UserFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends JpaRepository<UserFeedback, Integer> {
}