package com.apnaclone.apna_backend.service;

import com.apnaclone.apna_backend.dto.JobRequest;
import com.apnaclone.apna_backend.dto.JobResponse;
import com.apnaclone.apna_backend.entity.Job;
import com.apnaclone.apna_backend.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;

    // Save a new job
    @Override
    public JobResponse createJob(JobRequest jobRequest) {
        Job job = new Job();
        job.setTitle(jobRequest.getTitle());
        job.setDescription(jobRequest.getDescription());
        job.setLocation(jobRequest.getLocation());
        job.setCompanyName(jobRequest.getCompanyName());

        Job savedJob = jobRepository.save(job);

        JobResponse response = new JobResponse();
        response.setId(savedJob.getId());
        response.setTitle(savedJob.getTitle());
        response.setDescription(savedJob.getDescription());
        response.setLocation(savedJob.getLocation());
        response.setCompanyName(savedJob.getCompanyName());
        response.setPostedDate(savedJob.getPostedDate());

        return response;
    }

    // Get all jobs
    @Override
    public List<JobResponse> getAllJobs() {
        List<Job> jobs = jobRepository.findAll();
        List<JobResponse> responses = new ArrayList<>();

        for (Job job : jobs) {
            JobResponse response = new JobResponse();
            response.setId(job.getId());
            response.setTitle(job.getTitle());
            response.setDescription(job.getDescription());
            response.setLocation(job.getLocation());
            response.setCompanyName(job.getCompanyName());
            response.setPostedDate(job.getPostedDate());
            responses.add(response);
        }

        return responses;
    }
}
