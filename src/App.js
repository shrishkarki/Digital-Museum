import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Home from './Components/NavBar-Category/Home/Home';
import Blog from './Components/NavBar-Category/Blog/Blog';
import Gallery from './Components/NavBar-Category/Gallery/Gallery';
import Contact from './Components/NavBar-Category/Contact/Contact';
import About from './Components/NavBar-Category/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contactUs' element={<Contact />} />
          <Route path='/aboutUs' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
