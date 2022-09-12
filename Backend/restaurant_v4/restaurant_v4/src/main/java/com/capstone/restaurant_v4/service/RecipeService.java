package com.capstone.restaurant_v4.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.capstone.restaurant_v4.model.Recipe;


public interface RecipeService {
	
	public Recipe saveRecipe(Recipe recipe);
	public List<Recipe> getRecipe();
	public boolean deleteRecipe(@PathVariable Integer id);

}
