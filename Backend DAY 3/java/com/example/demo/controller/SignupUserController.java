package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.SignupRequest;
import com.example.demo.dtos.UserDTO;
import com.example.demo.services.AuthService;

@RestController
public class SignupUserController {
             
	
	@Autowired
	private AuthService authService;
	
	@PostMapping("/register")
	public ResponseEntity<?> createUser(@RequestBody SignupRequest signupRequest ){
		 UserDTO createdUser =authService.createUser(signupRequest);
		 if(createdUser==null)
			 return new ResponseEntity<>("user is not created",HttpStatus.BAD_REQUEST);
		 return new ResponseEntity<>(createdUser,HttpStatus.CREATED);
	}
}
