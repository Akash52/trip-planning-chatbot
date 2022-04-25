import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}
