package com.example.Auction.Repository;

import com.example.Auction.Model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    // Additional query methods (if any) can be defined here
}
