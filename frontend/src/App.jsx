import { Routes, Route } from 'react-router-dom'
import ScrollTop from './components/ScrollTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Doctors from './pages/Doctors'
import DoctorProfile from './pages/DoctorProfile'
import Book from './pages/Book'
import HealthTips from './pages/HealthTips'
import HealthTipDetail from './pages/HealthTipDetail'

export default function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:slug" element={<DoctorProfile />} />
          <Route path="/book" element={<Book />} />
          <Route path="/health-tips" element={<HealthTips />} />
          <Route path="/health-tips/:slug" element={<HealthTipDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
