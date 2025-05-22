import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationComponent from "./components/NavigationComponent";
import Home from "./pages/Home";
import InsertStock from "./pages/InsertStock";

function App() {
  return (
    <BrowserRouter>
      <NavigationComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insert-stock" element={<InsertStock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
