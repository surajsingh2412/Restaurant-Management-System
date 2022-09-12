package com.capstone.restaurant_v4.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.capstone.restaurant_v4.model.Bill;
import com.capstone.restaurant_v4.model.Menu;
import com.capstone.restaurant_v4.model.Order;
import com.capstone.restaurant_v4.repository.BillRepo;
import com.capstone.restaurant_v4.repository.MenuRepo;
import com.capstone.restaurant_v4.repository.OrderRepo;

@Service
public class BillServiceImpl implements BillService {
	
	@Autowired
	BillRepo billRepo;
	@Autowired
	OrderRepo orderRepo;
	@Autowired
	MenuRepo menuRepo;
	
	public List<Bill> getBill(){
		
		List<Order> orderList = orderRepo.findAll();
		Map<Integer, Integer> mapBill = new HashMap<Integer, Integer>();
		for(Order order : orderList) {
			int tempTableNo = order.getTableNo();
			int tempDishId = order.getDishId();
			if(mapBill.containsKey(tempTableNo)) {
				int prevCost = mapBill.get(tempTableNo);
				Optional<Menu> menuObj = menuRepo.findById(tempDishId);
				int newCost = menuObj.get().getCost() + prevCost;
				mapBill.replace(tempTableNo, newCost);
			}else {
				Optional<Menu> menuObj = menuRepo.findById(tempDishId);
				int newCost = menuObj.get().getCost();
				mapBill.put(tempTableNo, newCost);
			}
		}
		List<Bill> billList = new ArrayList<Bill>();
		for (Integer key : mapBill.keySet()) {
	        //System.out.println(key + ":" + map.get(key));
			Bill bill = new Bill();
			bill.setTableNo(key);
			bill.setTotalCost(mapBill.get(key));
			billList.add(bill);
	    }
		return billList;
	}
	
	public Bill getBillById(@PathVariable Integer id) {
		List<Order> orderList = orderRepo.findAll();
	    Bill obj1 = new Bill();
	    obj1.setTableNo(id);
	    int cost = 0;
	    List<Integer> dishList = new ArrayList<Integer>();
	    for(Order order : orderList) {
	    	if(order.getTableNo() == id)
	    	{
	    		dishList.add(order.getDishId());
	    	}
	    }
	    
	    for(Integer tempDishId : dishList) {
	    	Optional<Menu> menuObj = menuRepo.findById(tempDishId);
	    	cost += menuObj.get().getCost();
	    }
	    obj1.setTotalCost(cost);
		return obj1;
	}

}
