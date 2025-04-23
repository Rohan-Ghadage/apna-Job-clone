package com.apnaclone.apna_backend.service;


import com.apnaclone.apna_backend.config.JwtUtils;
import com.apnaclone.apna_backend.entity.User;
import com.apnaclone.apna_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    public String registerUser(User user){
        if (userRepository.existsByEmail(user.getEmail())){
            return "Email already registered !";
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "User Registered Successfully!";
    }

    public String loginUser(String email, String rawPassword){
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: "+email));
        if (user == null || !passwordEncoder.matches(rawPassword, user.getPassword())){
            return "Invalid email or password";
        }
        return jwtUtils.generateToken(email);
    }
}
