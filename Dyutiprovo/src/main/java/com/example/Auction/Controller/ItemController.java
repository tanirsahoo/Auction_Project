package com.example.Auction.Controller;

import com.example.Auction.Model.Item;
import com.example.Auction.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {
    @Autowired
    private ItemService itemService;

    @GetMapping
    public List<Item> findAll() {
        return itemService.findAll();
    }

    @GetMapping("/{id}")
    public Item findById(@PathVariable Long id) {
        return itemService.findById(id);
    }

    @PostMapping("/item_update")
    public Item save(@RequestBody Item item) {
        return itemService.save(item);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        itemService.deleteById(id);
    }
}
