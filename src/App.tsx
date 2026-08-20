import { SiteHeader } from "@/components/SiteHeader"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { MenuSection } from "@/components/MenuSection"
import { Gallery } from "@/components/Gallery"
import { Reviews } from "@/components/Reviews"
import { HoursLocation } from "@/components/HoursLocation"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Reviews />
        <HoursLocation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App