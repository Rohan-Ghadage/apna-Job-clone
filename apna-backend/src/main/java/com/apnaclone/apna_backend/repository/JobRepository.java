package com.apnaclone.apna_backend.repository;

import com.apnaclone.apna_backend.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
