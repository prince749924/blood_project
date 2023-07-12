import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
 
import ProtectedPage from "./MainComponents/Protectedpage";
import ProductInfo from "./components/Home/ProductInfo";

import Admin from "./components/Admin";

import Profile from "./components/Profile";

import HomeSec from "./components/SecHome/HomeSec";
import Campaign from "./Campaign";
import DonarList from "./components/DonarList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/donars" element={<DonarList />} />
         
          <Route
            path="/home"
            element={
              <ProtectedPage>
                <HomeSec />
              </ProtectedPage>
            }
          />
          <Route
            path="/campaign"
            element={
              <ProtectedPage>
                <Campaign />
              </ProtectedPage>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedPage>
                <Profile />
              </ProtectedPage>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedPage>
                <Admin />
              </ProtectedPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
