package com.capstone.restaurant_v4.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.capstone.restaurant_v4.model.Bill;

public interface BillService {

	public List<Bill> getBill();

	public Bill getBillById(@PathVariable Integer id);

}
