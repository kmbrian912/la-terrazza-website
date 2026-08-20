import { Star, MapPin, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { site } from "@/data/site"

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-background"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur-sm">
            <MapPin className="size-3.5" />
            Nairobi · Kenya
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur-sm">
            <Star className="size-3.5 fill-amber-300 text-amber-300" />
            {site.rating} · {site.reviewCount.toLocaleString()} reviews
          </span>
        </div>

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/70">
          Italian Restaurant · Lounge · Art Gallery
        </p>

        <h1 className="font-serif text-6xl font-semibold leading-none tracking-tight text-white sm:text-7xl md:text-8xl">
          La Terrazza
        </h1>

        <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-white/85 sm:text-2xl">
          {site.tagline}
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Authentic Italian cuisine paired with classic wines, served on the
          terrace of the Rhapta Promenade Mall — with an art gallery and rooftop
          views over the Nairobi skyline.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full bg-white text-foreground hover:bg-white/90">
              <Phone className="size-4" /> Reserve a Table
            </Button>
          </a>
          <a href={site.orderUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/50 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
            >
              Order Online <ArrowRight className="size-4" />
            </Button>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {["Authentic Italian", "Great Wine List", "Rooftop Seating", "Art Gallery"].map(
            (item) => (
              <Badge
                key={item}
                variant="secondary"
                className="border-white/20 bg-white/10 text-white/85"
              >
                {item}
              </Badge>
            )
          )}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pb-6">
        <a
          href="#about"
          className="animate-bounce text-white/60 transition-colors hover:text-white"
          aria-label="Scroll down"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}