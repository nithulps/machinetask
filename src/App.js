import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <HomePage/>
        <LoginPage/>
    </div>
  );
}

export default App;
