import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SideNavbar from './components/SideNavbar'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import First from "./pages/First";
import Card from "./components/Card";
import Single from "./pages/Single";
import Read from "./pages/Read";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/sideNavbar' element={<SideNavbar />} />
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/first' element={<First />} />
          <Route path='/card' element={<Card />} />
          <Route path='/first/:id' element={<Single />} />
          <Route path='/read/:id' element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
