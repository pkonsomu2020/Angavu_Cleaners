import { Box } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import Pricing from "./components/Pricing"
import Refills from "./components/Refills"
import FAQ from "./components/FAQ"
import BookingForm from "./components/BookingForm"
import Footer from "./components/Footer"

function App() {
  return (
    <Box bg="bg" minH="100vh" overflowX="hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Refills />
      <FAQ />
      <BookingForm />
      <Footer />
    </Box>
  )
}

export default App
