import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Footer from './Footer/Footer';
import Login from './Login/Login';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Hero></Hero>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
