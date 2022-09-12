package com.capstone.restaurant_v4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.restaurant_v4.model.Bill;

@Repository
public interface BillRepo extends JpaRepository<Bill, Integer> {

}
