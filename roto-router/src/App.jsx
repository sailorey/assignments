import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Main from "./components/main"
import About from "./components/about"
import Footer from "./components/footer"
import Services from "./components/services"
import Service from "./components/services"
import "./css/about.css"
import "./css/main.css"
import "./css/services.css"
import "./css/style.css"

function App() {
  
  return (
    <Router>
        <header id="grid-container1">
        <h1>Rey Martinez <br/>Equipment Operator</h1>
          <nav className={["HeaderNav", "header"]} id="menu">
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <a href=""><button className="button-5" role="button">Book Online</button></a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/services/:serviceId" element={<Service />}></Route>
        </Routes>
        <Footer />
    </Router>
  )
}

export default App