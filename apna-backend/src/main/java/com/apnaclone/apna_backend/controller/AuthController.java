package com.apnaclone.apna_backend.controller;

import com.apnaclone.apna_backend.dto.JwtResponse;
import com.apnaclone.apna_backend.dto.LoginRequest;
import com.apnaclone.apna_backend.entity.User;
import com.apnaclone.apna_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    // Register User
    @PostMapping("/register")
    public String registerUser(@RequestBody User user){

        return userService.registerUser(user);
    }

    // Login user
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) {
        String token = userService.loginUser(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(new JwtResponse(request.getEmail(), token));
    }

}
