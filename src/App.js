import Weather from "./components/API/WeatherAPI";
import "./App.css";
import Header from "./components/Navbar/Header";
import About from "./components/Other/About";
import Contact from "./components/Other/Contact";
import Home from "./components/Other/Home";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import TodoApp from "./components/TodoApp/TodoApp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/weather-api" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
