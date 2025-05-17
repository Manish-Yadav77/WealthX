import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Pages/user/Form';
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
import PrivateRoute from './component/PrivateRoute';
import Support from './component/Support';

function App() {
  const [qr1, setQr1] = useState(null);
  const [qr2, setQr2] = useState(null);
  const [token,setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <QrContext.Provider value={{ qr1, qr2, setQr1, setQr2, token, user, setToken, setUser }}>
      <Router>
        <div className="bg-black min-h-screen">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form/:planName" element={<PrivateRoute>
                <Form />
              </PrivateRoute>} />
            <Route
            path="/admin"
            element={
              <PrivateRoute requiredRole="Admin">
                <Admin />
              </PrivateRoute>
            }
          />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/accounts" element={<PrivateRoute >
                <ServicesSection />
              </PrivateRoute>} />
            {/* <Route path="/services" element={<ServicesSection />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rules&terms" element={<TermsAndConditions />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/support" element={<Support/>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </QrContext.Provider>
  );
}

export default App;
