import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './component/Form';
import { QrContext } from './context/QrContext';
import Admin from './Pages/Admin';
import { useState, useEffect } from 'react';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/home/Home';
import AccountDetails from './component/AccountDetails';
import ServicesSection from './component/Service';
import About from './component/About';
import Contact from './component/Contact';
import TermsAndConditions from './component/TermsConditions';
import Roadmap from './component/Roadmap';

function App() {
  const [qr1, setQr1] = useState(null);
  const [qr2, setQr2] = useState(null);

  // Load QR images from localStorage on first render
  useEffect(() => {
    const savedQr1 = localStorage.getItem("qr1");
    const savedQr2 = localStorage.getItem("qr2");

    if (savedQr1) setQr1(savedQr1);
    if (savedQr2) setQr2(savedQr2);
  }, []);

  

  return (
    <QrContext.Provider value={{ qr1, qr2, setQr1, setQr2 }}>
      <Router>
        <div className="bg-black min-h-screen">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form/:planName" element={<Form />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/accounts" element={<ServicesSection />} />
            {/* <Route path="/services" element={<ServicesSection />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rules&terms" element={<TermsAndConditions />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </QrContext.Provider>
  );
}

export default App;
