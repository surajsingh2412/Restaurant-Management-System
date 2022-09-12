package com.capstone.restaurant_v4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.restaurant_v4.model.Bill;
import com.capstone.restaurant_v4.model.Inventory;
import com.capstone.restaurant_v4.service.BillService;

@RestController
@RequestMapping("/Bill")
@CrossOrigin
public class BillController {
		
	@Autowired
	private BillService billService;
	
	@GetMapping("/getAll")
	public List<Bill> getAllBill(){
		return billService.getBill();
	}
	
	@PutMapping("/getTotal/{id}")
	public Bill getBill(@PathVariable Integer id) {
		return billService.getBillById(id);
	}
}
