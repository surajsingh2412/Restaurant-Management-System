package com.capstone.restaurant_v4.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@CrossOrigin
public class Bill {
	
	@Id
	@Column(name = "tableNo")
	private int tableNo;
	
	@Column(name = "totalCost")
	private int totalCost;
	
	public Bill(){
		
	}

	public int getTableNo() {
		return tableNo;
	}

	public void setTableNo(int tableNo) {
		this.tableNo = tableNo;
	}

	public int getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(int totalCost) {
		this.totalCost = totalCost;
	}
		
}
