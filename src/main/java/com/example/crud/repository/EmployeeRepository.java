package com.example.crud.repository;

import com.example.crud.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    @Query("SELECT e FROM Employee e WHERE CONCAT(e.firstName, ' ', e.lastName, ' ', e.emailId) LIKE %?1%")
    public List<Employee> search(String keyword);
}
