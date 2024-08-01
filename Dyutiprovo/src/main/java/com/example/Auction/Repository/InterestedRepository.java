package com.example.Auction.Repository;

import com.example.Auction.Model.Interested;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterestedRepository extends JpaRepository<Interested , Long> {
}
