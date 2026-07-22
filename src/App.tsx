import { useEffect } from "react"
import { Box } from "@chakra-ui/react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import Pricing from "./components/Pricing"
import Refills from "./components/Refills"
import FAQ from "./components/FAQ"
import BookingForm from "./components/BookingForm"
import Footer from "./components/Footer"
import PricingPage from "./pages/PricingPage"

function HomePage() {
  const location = useLocation()

  // When we arrive from another route with a section target, scroll to it.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (target) {
      const t = setTimeout(() => {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })
      }, 60)
      return () => clearTimeout(t)
    }
  }, [location])

  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Refills />
      <FAQ />
      <BookingForm />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Box bg="bg" minH="100vh" overflowX="hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Box>
  )
}

export default App
