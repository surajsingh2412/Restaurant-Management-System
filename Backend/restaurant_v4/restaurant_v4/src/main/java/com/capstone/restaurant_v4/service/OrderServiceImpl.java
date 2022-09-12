package com.capstone.restaurant_v4.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.capstone.restaurant_v4.model.Inventory;
import com.capstone.restaurant_v4.model.Order;
import com.capstone.restaurant_v4.model.Recipe;
import com.capstone.restaurant_v4.repository.InventoryRepo;
import com.capstone.restaurant_v4.repository.OrderRepo;
import com.capstone.restaurant_v4.repository.RecipeRepo;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	OrderRepo orderRepo;
	@Autowired
	RecipeRepo recipeRepo;
	@Autowired
	InventoryRepo inventoryRepo;
	
	@Override
	public Order saveOrder(Order order) {
		return orderRepo.save(order);
	}
	
	@Override
	public void solve(Order order)
	{
		Integer tempDishId = order.getDishId();
		List<Recipe> recipeList = recipeRepo.findAll();
		Map<String, Integer> itemsList = new HashMap<String, Integer>();
		
		for( Recipe recipe : recipeList)
		{
			if(recipe.getDishId() == tempDishId) {
				itemsList.put(recipe.getItem(),recipe.getDishUnit());
			}
		}
		
		List<Inventory> inventoryList = inventoryRepo.findAll();
		for(Inventory inventory: inventoryList)
		{
			if(itemsList.containsKey(inventory.getItem()))
			{
				int setterunit = inventory.getUnits() - itemsList.get(inventory.getItem());
			    inventory.setUnits(setterunit);
			    inventoryRepo.save(inventory);
			}
		}
		return;
	}
	
	@Override
	public List<Order> getOrder(){
		return orderRepo.findAll();
	}
	
	@Override
	public boolean deleteOrder(@PathVariable Integer id) {
		Optional<Order> order = orderRepo.findById(id);
		if(order.isPresent())
		{
			orderRepo.delete(order.get());
			return true;
		}
		
		return false;
	}
	
	@Override
	public void updateOrder(Order order, @PathVariable Integer id) {
		Optional<Order> orderobj = orderRepo.findById(id);
		if(orderobj.isPresent())
		{
				orderobj.get().setStatus(order.getStatus());
				orderRepo.save(orderobj.get());
		}
		else
		{
			orderRepo.save(order);
		}
		return;
	}

}
