import axios from "axios";

export const getEmployees = (keyword) =>
  axios.get(`http://localhost:8080/api/v1/employees?keyword=${keyword}`);
export const createEmployee = (employee) =>
  axios.post("http://localhost:8080/api/v1/employees", employee);
export const getEmployeeById = (id) =>
  axios.get(`http://localhost:8080/api/v1/employees/${id}`);
export const updateEmployee = (id, employee) =>
  axios.put(`http://localhost:8080/api/v1/employees/${id}`, employee);
export const deleteEmployee = (id) =>
  axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
