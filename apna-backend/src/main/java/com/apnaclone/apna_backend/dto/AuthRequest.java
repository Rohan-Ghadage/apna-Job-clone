package com.apnaclone.apna_backend.dto;

import lombok.Data;

@Data
public class AuthRequest {

    public String email;
    public String password;
}
