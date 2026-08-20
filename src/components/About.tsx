import { Wine, Martini, Cake, Coffee, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { highlights } from "@/data/site"

const featureIcons = [
  <Wine key="wine" className="size-5" />,
  <Martini key="martini" className="size-5" />,
  <Cake key="cake" className="size-5" />,
  <Coffee key="coffee" className="size-5" />,
  <Sparkles key="sparkles" className="size-5" />,
  <Users key="users" className="size-5" />,
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                alt="La Terrazza dining room"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80"
                alt="Fresh homemade pasta"
                loading="lazy"
                className="mt-12 aspect-[3/4] w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-border bg-card px-6 py-4 text-center shadow-xl">
              <p className="font-serif text-3xl font-semibold text-primary">Est. Nairobi</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Authentic · Italian · Terrace
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              About Us
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              A taste of Italy, on a Nairobi terrace
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              La Terrazza is an Italian restaurant, lounge and art gallery
              bringing a unique Italian experience to the heart of Nairobi.
              Guests get to wander a beautiful art gallery and enjoy authentic,
              flavorful Italian cuisine paired with wines from the heart of
              Italy.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Perched on the terrace of the Rhapta Promenade Mall, the
              restaurant offers a scenic view of the city beautifully lit under
              the night sky. Open for lunch and dinner every day of the week,
              we have an expansive menu for you to choose from — plus an on-site
              bar, free Wi-Fi, and table service throughout.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {featureIcons[i % featureIcons.length]}
                  </span>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#menu">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore the Menu
                </Button>
              </a>
              <a href="#gallery">
                <Button variant="outline">View the Gallery</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}