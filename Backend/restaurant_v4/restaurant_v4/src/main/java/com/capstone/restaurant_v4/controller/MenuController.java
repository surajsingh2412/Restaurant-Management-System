package com.capstone.restaurant_v4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.restaurant_v4.model.Menu;
import com.capstone.restaurant_v4.service.MenuService;

@RestController
@CrossOrigin
@RequestMapping("/Menu")
public class MenuController {
	
	@Autowired
	private MenuService menuService;
	
	@PostMapping("/add")
	public String addMenu(@RequestBody Menu menu)
	{
		menuService.saveMenu(menu);
		return "New dish added to Menu";
	}
	
	@GetMapping("/getAll")
	public List<Menu> getAllMenu(){
		return menuService.getMenu();
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteMenuById(@PathVariable Integer id)
	{
		if(menuService.deleteMenu(id))
			return "DishId " + Integer.toString(id) +" is deleted from db";
		else
			return "DishId " + Integer.toString(id) +" is not present in db";
	}
			

}
