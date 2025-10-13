import React from 'react';
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/HomePage.jsx";
import About from "./pages/AboutPage.jsx";
import Projects from "./pages/ProjectsPage.jsx";
import Services from "./pages/ServicesPage.jsx";
import Contact from "./pages/ContactPage.jsx";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
