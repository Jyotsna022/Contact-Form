import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Auth from './pages/Auth'
import About from './pages/About'
import Contact from './pages/Contact'
import { RootLayout } from "./components/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/Auth" element={<Auth />} />
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;