package com.example.Auction.Service;

import com.example.Auction.Model.Payment;
import com.example.Auction.Repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> findAll() {
        return paymentRepository.findAll();
    }

    public Payment findById(Long id) {
        Optional<Payment> optionalPayment = paymentRepository.findById(id);
        return optionalPayment.orElse(null);
    }

    public Payment save(Payment payment) {
        return paymentRepository.save(payment);
    }

    public void deleteById(Long id) {
        paymentRepository.deleteById(id);
    }
}
