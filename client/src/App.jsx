import { Button, Flex } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SecurePage from "./Components/SecurePage";
import Loader from "./Components/Loader";
import { useSelector } from "react-redux";
function App() {
  const {load} = useSelector(state => state.load);
  return (
    <>
      {load && <Loader />} 
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SecurePage>
                <Home />
              </SecurePage>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
