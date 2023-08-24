
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginForm/Login";
import Home from "./home/Home";
import Resumes from "./assets/ResumesInterface";



const App = () => {
 
  return (


    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="Resumes" element={<Resumes/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
