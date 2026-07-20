import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Reconstructions from "./pages/Reconstructions.jsx";

/* reset scroll on route change — unless we're jumping to a #hash anchor */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="site">
      <ScrollToTop />
      <NavBar />
      <main key={pathname} className="page-fade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reconstructions" element={<Reconstructions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
