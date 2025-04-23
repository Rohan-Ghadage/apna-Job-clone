package com.apnaclone.apna_backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class JobResponse {

    private Long id;
    private String title;
    private String description;
    private String location;
    private String companyName;
    private LocalDate postedDate;
}
