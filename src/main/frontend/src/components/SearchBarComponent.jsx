import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBarComponent = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/employees?keyword=${keyword}`);
  };
  return (
    <form class="d-flex" onSubmit={handleSubmit}>
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBarComponent;
