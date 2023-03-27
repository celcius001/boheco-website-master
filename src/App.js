import Home from "./pages/Home";
import About from "./pages/About";
import Advisory from "./pages/Advisory";
import Partners from "./pages/Partners";
import Inquiries from "./pages/Inquiry";
import Attendance from "./pages/Attendance";
import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="rate-advisory" element={<Advisory />} />
          <Route path="partners" element={<Partners />} />
          <Route path="inquiries" element={<Inquiries />} />
        </Route>
        <Route path="/attendance">
          <Route index element={<Attendance />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
