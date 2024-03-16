import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
      {/* Link Component should be inside the BrowserRouter to work */}
      <Navbar/>
      {/* This Navbar will be Laid in every Page */}
      <div className="pages">
        <Routes>
          <Route  path="/" element ={<Home/>} >
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}
export default App;

