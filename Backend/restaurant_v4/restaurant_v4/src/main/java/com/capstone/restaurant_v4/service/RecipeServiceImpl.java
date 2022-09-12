package com.capstone.restaurant_v4.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.capstone.restaurant_v4.model.Recipe;
import com.capstone.restaurant_v4.repository.RecipeRepo;

@Service
public class RecipeServiceImpl implements RecipeService{
	
	@Autowired
	private RecipeRepo recipeRepo;
	
	@Override
	public Recipe saveRecipe(Recipe recipe) {
		return recipeRepo.save(recipe);
	}
	
	@Override
	public List<Recipe> getRecipe(){
		return recipeRepo.findAll();
	}
	
	@Override
	public boolean deleteRecipe(@PathVariable Integer id) {
		Optional<Recipe> recipe = recipeRepo.findById(id);
		if(recipe.isPresent())
		{
			recipeRepo.delete(recipe.get());
			return true;
		}
		
		return false;
	}


}
