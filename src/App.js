import {BrowserRouter, Routes, Route} from "react-router-dom"
import FAQ from "./Components/Home/FAQ"
import AdminMain from "./Components/DashBoard.js/AdminHome"
import Header from "./Components/Headers/Header"
import Landing from "./Components/Home/LandingPage"
// import Hero from "./Components/Home/HeroPage"
import Footer from "./Components/Home/Footer"
import About from "./Components/Home/About"
import Why from "./Components/Home/WhyUs"
import SignUp from "./Components/Signs/SignUp";
import SignIn from "./Components/Signs/SignIn";
import Pricing from "./Components/Home/Pricing"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/userboard" element={<AdminMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/why" element={<Why />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
