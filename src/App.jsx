import './App.css'
import Header from './components/Header'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import { BrowserRouter, Routes, Route } from "react-router"
import Resume from './pages/Resume/Resume'
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
