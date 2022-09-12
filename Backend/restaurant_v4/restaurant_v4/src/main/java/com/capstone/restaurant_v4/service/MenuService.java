package com.capstone.restaurant_v4.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.capstone.restaurant_v4.model.Menu;

public interface MenuService {
	
	public Menu saveMenu(Menu menu);
	public List<Menu> getMenu();
	public boolean deleteMenu(@PathVariable Integer id);
}
