package com.capstone.restaurant_v4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.restaurant_v4.model.Order;
import com.capstone.restaurant_v4.service.OrderService;

@RestController
@CrossOrigin("http://localhost:3002/")
@RequestMapping("/Order")
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	
	@GetMapping("/getAll")
	public List<Order> getAllOrder() {
		return orderService.getOrder();
	}
	
	@PostMapping("/add")
	public String addOrder(@RequestBody Order order) {
		orderService.saveOrder(order);
		orderService.solve(order);
		return "Order is placed";
	}

	@DeleteMapping("/delete/{id}")
	public String deleteOrderById(@PathVariable Integer id)
	{
		if(orderService.deleteOrder(id))
			return "OrderId " + Integer.toString(id) +" is deleted from db";
		else
			return "OrderId " + Integer.toString(id) +" is not present in db";
	}
	
	@PutMapping("/update/{id}")
	public String updateOrderById(@RequestBody Order order,@PathVariable Integer id ) {
		orderService.updateOrder(order,id);
		return "OrderId is updated";
	}
	

}
