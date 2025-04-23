package com.apnaclone.apna_backend.controller;

import com.apnaclone.apna_backend.dto.JobRequest;
import com.apnaclone.apna_backend.dto.JobResponse;
import com.apnaclone.apna_backend.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class JobController {

    @Autowired
    private JobService jobService;

    // create new job
    @PostMapping("/jobs")
    public JobResponse createJob(@RequestBody JobRequest jobRequest){
        return jobService.createJob(jobRequest);
    }

    @GetMapping
    public List<JobResponse> getAllJobs(){
        return jobService.getAllJobs();
    }
}
