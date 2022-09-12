package com.capstone.restaurant_v4.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.capstone.restaurant_v4.model.Inventory;


public interface InventoryService {
	
	public Inventory saveInventory(Inventory inventory);
	public List<Inventory> getInventory();
	public boolean deleteInventory(@PathVariable Integer id);
	public void updateInventory(Inventory inventory, @PathVariable Integer id);
	public List<Inventory> getAlert();

}
