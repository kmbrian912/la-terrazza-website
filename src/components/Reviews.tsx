import { Star, Quote, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/data/site"

const distribution = [
  { stars: 5, pct: 66 },
  { stars: 4, pct: 19 },
  { stars: 3, pct: 7 },
  { stars: 2, pct: 3 },
  { stars: 1, pct: 5 },
]

const testimonials = [
  {
    quote:
      "Food is good, servers are friendly — ask for Said. The menu is varied and comprehensive. The atmosphere is hard to beat in the evening.",
    name: "Heinz G.",
    meta: "Google review · 7 months ago",
  },
  {
    quote:
      "Authentic Italian flavours right here in Nairobi. The rooftop setting and the wine list make it a favourite for dinner.",
    name: "Google Reviewer",
    meta: "Rated 5 stars on Google",
  },
  {
    quote:
      "A lovely spot for a family lunch or a romantic evening. Cozy, welcoming staff and great dessert selection.",
    name: "Google Reviewer",
    meta: "Rated 5 stars on Google",
  },
]

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < 4
              ? "size-4 fill-amber-400 text-amber-400"
              : "size-4 fill-amber-400/40 text-amber-400/40"
          }
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Reviews
            </p>
            <h2 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
              Loved by guests across Nairobi
            </h2>
            <p className="mt-4 text-muted-foreground">
              Rated {site.rating} out of 5 from over{" "}
              {site.reviewCount.toLocaleString()} reviews on Google.
            </p>

            <div className="mt-8 flex items-end gap-4">
              <span className="font-serif text-7xl font-semibold leading-none text-foreground">
                {site.rating}
              </span>
              <div className="pb-1.5">
                <Stars />
                <p className="mt-1 text-sm text-muted-foreground">
                  {site.reviewCount.toLocaleString()} reviews
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {distribution.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="w-8 shrink-0 text-sm tabular-nums text-muted-foreground">
                    {row.stars}★
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-amber-400"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right text-xs tabular-nums text-muted-foreground">
                    {row.pct}%
                  </span>
                </div>
              ))}
            </div>

            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(
                "La Terrazza Italian Restaurant Nairobi reviews"
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" className="mt-8">
                Read all reviews <ExternalLink className="size-4" />
              </Button>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.quote}
                className="flex flex-col justify-between rounded-2xl border border-border bg-background p-6"
              >
                <div>
                  <Quote className="size-6 text-primary/40" />
                  <blockquote className="mt-3 font-serif text-lg italic leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-6">
                  <Stars />
                  <p className="mt-2 text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.meta}</p>
                </figcaption>
              </figure>
            ))}
            <div className="flex flex-col justify-center rounded-2xl bg-primary p-6 text-primary-foreground">
              <p className="font-serif text-2xl font-semibold leading-snug">
                Your table on the terrace is waiting.
              </p>
              <a href="#contact" className="mt-4">
                <Button className="bg-white text-primary hover:bg-white/90">
                  Reserve a Table
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}