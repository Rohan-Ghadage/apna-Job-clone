import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import TrendingSection from "./components/TrendingSection"
import PhoneAuthFlow from "./components/PhoneAuthFlow"
import JobSearchPage from "./components/JobSearchPage" // make sure the path is correct
import Hero from './components/Hero'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TrendingSection />
              <PhoneAuthFlow />
            </>
          }
        />
        <Route path="/search-jobs" element={<JobSearchPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
