package com.example.demo.dtos;

import lombok.Data;

@Data
public class SignupRequest {

	private String id;
	private String name;
	 
	private String email;
	
	private String phone;
	
	private String password;
}
