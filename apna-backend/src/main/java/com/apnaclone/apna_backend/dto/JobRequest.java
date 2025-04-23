package com.apnaclone.apna_backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JobRequest {


    private String title;
    private String description;
    private String location;
    private String companyName;
}
