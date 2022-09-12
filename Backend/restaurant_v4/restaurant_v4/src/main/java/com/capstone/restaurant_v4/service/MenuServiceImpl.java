package com.capstone.restaurant_v4.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.capstone.restaurant_v4.model.Menu;
import com.capstone.restaurant_v4.repository.MenuRepo;

@Service
public class MenuServiceImpl implements MenuService {
	
	@Autowired
	private MenuRepo menuRepo;
	
	@Override
	public Menu saveMenu(Menu menu) {
		return menuRepo.save(menu);
	}
	
	@Override
	public List<Menu> getMenu(){
		return menuRepo.findAll();
	}
	
	@Override
	public boolean deleteMenu(@PathVariable Integer id) {
		Optional<Menu> menu = menuRepo.findById(id);
		if(menu.isPresent())
		{
			menuRepo.delete(menu.get());
			return true;
		}
		
		return false;
	}
	
}
