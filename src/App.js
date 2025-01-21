import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import Forgot from "./pages/Forgot"; // Importe a página Forgot
import './App.css';

function App() {
    return (
        <Router>
            <header>
                <div className="logo">
                    <h1>Some Useful Links!</h1>
                </div>
              
                <nav>
                    <ul className="navUl">
                        <li className="navItem"><Link to="/" className="navItemLink">Home</Link></li>
                        <li className="navItem"><a href="https://github.com/mrtokyo33/useful-sites" target="_blank" rel="noopener noreferrer">Repository</a></li>
                    </ul>
                </nav>

                <div className="searchAndLogin">
                    <div className="searchContainer">
                        <i className="fa fa-search"></i>
                        <input type="text" name="search" placeholder="Search..." />
                    </div>

                    <div className="loginIconContainer">
                        <Link to="/login">
                            <i className="fas fa-user"></i>
                        </Link>
                    </div>

                    <div className="barsIconContainer">
                        <Link to="/login">
                            <i className="fas fa-bars"></i>
                        </Link>
                    </div>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot" element={<Forgot />} /> {/* Adiciona a rota para Forgot */}
            </Routes>
        </Router>
    );
}

export default App;
