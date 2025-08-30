import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Students from './pages/Students'
import Training from './pages/Training'
import Partners from './pages/Partners'
import GetInvolved from './pages/GetInvolved'
import './App.css'

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/students" element={<Students />} />
            <Route path="/training" element={<Training />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
