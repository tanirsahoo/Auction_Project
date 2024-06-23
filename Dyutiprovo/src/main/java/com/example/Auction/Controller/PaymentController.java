package com.example.Auction.Controller;

import com.example.Auction.Model.Payment;
import com.example.Auction.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @GetMapping
    public List<Payment> findAll() {
        return paymentService.findAll();
    }

    @GetMapping("/{id}")
    public Payment findById(@PathVariable Long id) {
        return paymentService.findById(id);
    }

    @PostMapping
    public Payment save(@RequestBody Payment payment) {
        return paymentService.save(payment);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        paymentService.deleteById(id);
    }
}
