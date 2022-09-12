package com.capstone.restaurant_v4.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;


import com.capstone.restaurant_v4.model.Order;

public interface OrderService {

	public Order saveOrder(Order order);
	public List<Order> getOrder();
	public boolean deleteOrder(@PathVariable Integer id);
	public void updateOrder(Order order, @PathVariable Integer id);
	public void solve(Order order);
}
