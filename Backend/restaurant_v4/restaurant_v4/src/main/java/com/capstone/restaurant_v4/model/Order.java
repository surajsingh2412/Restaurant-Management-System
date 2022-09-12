package com.capstone.restaurant_v4.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Table(name = "OrderTable")
@Entity


public class Order {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrderId")
    private int OrderId;
    
    @Column(name = "tableNo")
    private int tableNo;
    
    @Column(name = "dishId")
    private int dishId;
    
    @Column(name = "status")
    private String status;
    
    @Column(name = "specialRequest")
    private String specialRequest;
    
    public int getOrderId() {
		return OrderId;
	}

    public Order() {
    	
    }
    
	public void setOrderId(int orderId) {
		OrderId = orderId;
	}

	public int getTableNo() {
		return tableNo;
	}

	public void setTableNo(int tableNo) {
		this.tableNo = tableNo;
	}

	public Integer getDishId() {
		return dishId;
	}

	public void setDishId(Integer dishId) {
		this.dishId = dishId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getSpecialRequest() {
		return specialRequest;
	}

	public void setSpecialRequest(String specialRequest) {
		this.specialRequest = specialRequest;
	}

}
