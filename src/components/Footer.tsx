import { MapPin, Phone, Star, Heart } from "lucide-react"
import { site, hours } from "@/data/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-serif text-lg italic text-primary">
                LT
              </span>
              <span className="font-serif text-xl font-semibold text-foreground">
                La Terrazza
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.fullName}. Authentic Italian cuisine, classic wines, an
              on-site bar and an art gallery — served on the terrace of the
              Rhapta Promenade Mall in Nairobi.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              {site.rating} · {site.reviewCount.toLocaleString()} Google reviews
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span className="tabular-nums">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {site.address}
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  Get directions
                </a>
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="size-3.5 fill-primary text-primary" /> in Nairobi
          </p>
        </div>
      </div>
    </footer>
  )
}