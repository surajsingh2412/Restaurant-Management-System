package com.capstone.restaurant_v4.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Recipe {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="ingredientId")
    private int ingredientId;
    
    @Column(name="dishId")
    private int dishId;
    
    @Column(name="Item")
    private String item;
    
    @Column(name="dishUnit")
    private int dishUnit;
    
    public int getIngredientId() {
		return ingredientId;
	}

	public void setIngredientId(int ingredientId) {
		this.ingredientId = ingredientId;
	}

	public int getDishId() {
		return dishId;
	}

	public void setDishId(int dishId) {
		this.dishId = dishId;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public int getDishUnit() {
		return dishUnit;
	}

	public void setDishUnit(int dishUnit) {
		this.dishUnit = dishUnit;
	}

	public Recipe() {
    	
    }
    
    

}
