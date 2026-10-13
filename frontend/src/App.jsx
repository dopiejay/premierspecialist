import { Routes, Route, Outlet } from 'react-router-dom'
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
import Admin from './admin/Admin'

function SiteLayout() {
  return (
    <>
      <ScrollTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:slug" element={<DoctorProfile />} />
        <Route path="/book" element={<Book />} />
        <Route path="/health-tips" element={<HealthTips />} />
        <Route path="/health-tips/:slug" element={<HealthTipDetail />} />
      </Route>
    </Routes>
  )
}
