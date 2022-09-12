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

import com.capstone.restaurant_v4.model.Recipe;
import com.capstone.restaurant_v4.service.RecipeService;

@RestController
@RequestMapping("/Recipe")
@CrossOrigin
public class RecipeController {
	
	@Autowired
	private RecipeService reciepeService;
	
	@PostMapping("/add")
	public String addRecipe(@RequestBody Recipe recipe) {
		reciepeService.saveRecipe(recipe);
		return "New Ingredient added to recipe";
	}
	
	@GetMapping("/getAll")
	public List<Recipe> getAllRecipe(){
		return reciepeService.getRecipe();
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteRecipeById(@PathVariable Integer id)
	{
		if(reciepeService.deleteRecipe(id))
			return "DishId " + Integer.toString(id) +" is deleted from db";
		else
			return "DishId " + Integer.toString(id) +" is not present in db";
	}

}
