package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.SignupRequest;
import com.example.demo.dtos.UserDTO;
import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;

@Service
public class AuthServiceImpl implements AuthService{
    @Autowired
    private UserRepository userRepository;
    
    @Override
    public UserDTO createUser(SignupRequest signupRequest) {
    	User user=new User();
    	user.setName(signupRequest.getName());
    	user.setEmail(signupRequest.getEmail());
    	user.setPhone(signupRequest.getPhone());
    	user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
    	User createdUser= userRepository.save(user);
    	UserDTO userDTO=new UserDTO();
    	userDTO.setName(createdUser.getName());
    	userDTO.setEmail(createdUser.getEmail());
    	userDTO.setPhone(createdUser.getPhone());
    	return userDTO;
    	
    }
}
