import React, { useEffect, useState } from "react";
import { getEmployees } from "../services/EmployeeService";
import { useLocation, useNavigate } from "react-router-dom";
import * as EmployeeService from "../services/EmployeeService";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ListEmployeeComponent = () => {
  const query = useQuery();
  let keyword = query.get("keyword");
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);

  if (keyword == null) keyword = "";
  useEffect(() => {
    getEmployees(keyword).then((res) => {
      setEmployee(res.data);
    });
  }, [keyword]);

  const formEmployee = (id) => {
    navigate(`/form-employee/${id}`);
  };
  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      setEmployee(employee.filter((em) => em.id !== id));
    });
  };
  const viewEmployee = (id) => {
    navigate(`/view-employee/${id}`);
  };

  return (
    <div>
      <h2 className="text-center">List Employee</h2>
      <div className="row">
        <button
          className="btn btn-primary"
          onClick={() => formEmployee("create")}
        >
          Add Employee
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((em) => (
              <tr key={em.id}>
                <td>{em.firstName}</td>
                <td>{em.lastName}</td>
                <td>{em.emailId}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => formEmployee(em.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger ml-1"
                    onClick={() => deleteEmployee(em.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info ml-1"
                    onClick={() => viewEmployee(em.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
