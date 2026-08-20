import { Clock, MapPin, Phone, ExternalLink, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { site, hours, amenities } from "@/data/site"

export function HoursLocation() {
  return (
    <section id="visit" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            Find us on the terrace
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-64 w-full sm:h-80">
              <iframe
                title="La Terrazza Italian Restaurant location"
                src="https://www.google.com/maps?q=La+Terrazza+Italian+Restaurant+Nairobi,+Rhapta+Promenade+Mall,+Rhapta+Road&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{site.fullName}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{site.address}</p>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm">
                    Directions <ExternalLink className="size-3.5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="size-5 text-primary" />
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Opening Hours
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between py-2.5 text-sm"
                  >
                    <span className="font-medium text-foreground">{row.day}</span>
                    <span className="text-muted-foreground">{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-primary/10 px-3 py-2 text-center text-xs font-medium text-primary">
                Open daily · Lunch &amp; Dinner · Walk-ins welcome
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <CalendarCheck className="size-5 text-primary" />
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Good to know
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity) => (
                  <Badge key={amenity} variant="secondary">
                    {amenity}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${site.phoneHref}`} className="flex-1">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="size-4" /> {site.phoneDisplay}
                  </Button>
                </a>
                <a href={site.orderUrl} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Order Online
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}