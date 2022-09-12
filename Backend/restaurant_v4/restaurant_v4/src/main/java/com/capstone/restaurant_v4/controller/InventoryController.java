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

import com.capstone.restaurant_v4.model.Inventory;
import com.capstone.restaurant_v4.service.InventoryService;

@RestController
@RequestMapping("/Inventory")
@CrossOrigin
public class InventoryController {
	
	@Autowired
	private InventoryService inventoryService;
	
	@PostMapping("/add")
	public String addInventory(@RequestBody Inventory inventory) {
		inventoryService.saveInventory(inventory);
		return "Item added to inventory";
	}
	
	@GetMapping("/getAll")
	public List<Inventory> getAllInventory(){
		return inventoryService.getInventory();
	}
	
	@GetMapping("/getAlert")
	public List<Inventory> getAlertInventory()
	{
		return inventoryService.getAlert();
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteInventoryById(@PathVariable Integer id)
	{
		if(inventoryService.deleteInventory(id))
			return "DishId " + Integer.toString(id) +" is deleted from db";
		else
			return "DishId " + Integer.toString(id) +" is not present in db";
	}
	
	@PutMapping("/update/{id}")
	public String updateInventoryById(@RequestBody Inventory inventory,@PathVariable Integer id ) {
		inventoryService.updateInventory(inventory,id);
		return "Inventory is updated";
	}

}
