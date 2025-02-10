import Header from "./components/Header"
import Hero from "./components/Hero"
import CompanyGrid from "./components/CompanyGrid"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <Hero />
        <CompanyGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

