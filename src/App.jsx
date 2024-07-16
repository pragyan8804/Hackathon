import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rules" element={<Rules />} />
            </Routes>
        </Router>
    );
};

export default App;
