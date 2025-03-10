import './App.css';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Forgot from './pages/Forgot'
import Configs from './pages/Configs'
import { useColorManager } from './services/useColorManager'
import { useFontManager } from './services/useFontManager'
import initLocalStorage from './services/initLocalStorage'

initLocalStorage()

function App() {
  const { colors, handleColorChange, resetColors } = useColorManager()
  const { fonts, selectedFont, handleFontChange } = useFontManager()

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route
          path="/configs"
          element={
            <Configs
              colors={colors}
              onColorChange={handleColorChange}
              onResetColors={resetColors}
              fonts={fonts}
              selectedFont={selectedFont}
              onFontChange={handleFontChange}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
