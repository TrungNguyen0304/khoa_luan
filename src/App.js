import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Tours from "./pages/Tours/Tours";
import TourDetails from "./pages/Tours/TourDetails";
import Booking from "./pages/Booking/Booking";
import Destinations from "./pages/Destinations/Destinations";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";
import Login from "./pages/Auth/Login/login";
import Register from "./pages/Auth/Register/register";
function App() {
  const location = useLocation();

  // Kiểm tra nếu đang ở trang Login, thêm class đặc biệt cho Header
  const headerClass = location.pathname === "/login" ? "header-login" : "";

  return (
    <>
      <Header className={headerClass} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tour-details" element={<TourDetails />} />
        <Route path="booking" element={<Booking />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="gallery" element={<PhotoGallery />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/register" && <Footer />}
      
    </>
  );
}

export default App;
