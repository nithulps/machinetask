import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
        <Header/>
        <Routes>
          <Route path="/" element= {<HomePage />} />
          <Route path="/login" element= {<LoginPage />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
