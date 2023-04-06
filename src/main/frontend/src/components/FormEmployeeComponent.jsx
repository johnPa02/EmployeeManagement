import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as EmployeeService from "../services/EmployeeService";

const FormEmployeeComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const cancel = () => {
    navigate("/employees");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id !== "create") {
      EmployeeService.updateEmployee(id, employee).then((res) => {
        navigate("/employees");
      });
    } else {
      EmployeeService.createEmployee(employee).then((res) => {
        navigate("/employees");
      });
    }
  };
  useEffect(() => {
    if (id !== "create") {
      EmployeeService.getEmployeeById(id).then((res) => {
        let data = res.data;
        delete data["id"];
        setEmployee(data);
      });
    }
  }, [id]);
  return (
    <div className="container">
      <div className="card col-md-6 m-auto">
        <h2 className="text-center">
          {id === "create" ? "Create New Employee" : "Update Employee"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First name</label>
            <input
              className="form-control"
              name="firstName"
              aria-describedby="emailHelp"
              value={employee.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              className="form-control"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="emailId"
              value={employee.emailId}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Save
          </button>
          <button className="btn btn-danger ml-1" onClick={cancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormEmployeeComponent;
