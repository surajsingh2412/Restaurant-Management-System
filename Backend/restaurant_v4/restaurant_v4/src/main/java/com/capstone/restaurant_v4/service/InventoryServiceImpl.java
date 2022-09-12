package com.capstone.restaurant_v4.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.capstone.restaurant_v4.model.Inventory;
import com.capstone.restaurant_v4.repository.InventoryRepo;

@Service
public class InventoryServiceImpl implements InventoryService {
	
	@Autowired
	InventoryRepo inventoryRepo;
	
	@Override
	public Inventory saveInventory(Inventory inventory)
	{
		return inventoryRepo.save(inventory);
	}
	
	@Override
	public List<Inventory> getInventory(){
		return inventoryRepo.findAll();
	}
	
	@Override
	public boolean deleteInventory(@PathVariable Integer id) {
		Optional<Inventory> inventory = inventoryRepo.findById(id);
		if(inventory.isPresent())
		{
			inventoryRepo.delete(inventory.get());
			return true;
		}
		
		return false;
	}
	
	@Override
	public void updateInventory(Inventory inventory, @PathVariable Integer id) {
		Optional<Inventory> inventoryobj = inventoryRepo.findById(id);
		if(inventoryobj.isPresent())
		{
			inventoryobj.get().setUnits(inventory.getUnits());
			inventoryRepo.save(inventoryobj.get());
		}
		else
		{
			inventoryRepo.save(inventory);
		}
		return;
	}
	
	
	@Override
	public List<Inventory> getAlert(){
		List<Inventory> inObj=inventoryRepo.findAll();
		List<Inventory> inObj1=new ArrayList<Inventory>();
		for(Inventory inventory: inObj)
		{
			if(inventory.getUnits()<=10)
				inObj1.add(inventory);
		}
		return inObj1;
		
		

    }
	}
