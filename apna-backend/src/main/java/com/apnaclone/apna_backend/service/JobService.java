package com.apnaclone.apna_backend.service;

import com.apnaclone.apna_backend.dto.JobRequest;
import com.apnaclone.apna_backend.dto.JobResponse;

import java.util.List;

public interface JobService {

    JobResponse createJob(JobRequest jobRequest);
    List<JobResponse> getAllJobs();
}
