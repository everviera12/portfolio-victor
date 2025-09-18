import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './About.jsx'
import Header from './components/Header.jsx'
import Contact from './Contact.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>

    {/* <Footer/> */}
  </BrowserRouter>
)
