import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Franchise from "./pages/Franchise";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Anasayfa from "./pages/Anasayfa";
import Menu from "./pages/Menu";
import Iletisim from "./pages/Iletisim";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
