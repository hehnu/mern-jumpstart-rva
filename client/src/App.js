import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
 
    
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>




        <Routes>
          <Route path="/profile/" element={<Profile />} />
        </Routes>
        
    </BrowserRouter>);
    

}




export default App;