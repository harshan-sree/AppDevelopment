package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Train;



@Repository
public interface TrainRepository extends JpaRepository<Train,Long>{

}
