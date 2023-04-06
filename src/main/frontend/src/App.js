import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormEmployeeComponent from "./components/FormEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />

        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route
              path="/employees/search"
              element={<ListEmployeeComponent />}
            />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route
              path="/form-employee/:id"
              element={<FormEmployeeComponent />}
            />
            <Route
              path="/view-employee/:id"
              element={<ViewEmployeeComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
