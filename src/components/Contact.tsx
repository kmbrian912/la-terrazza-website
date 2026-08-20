import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/data/site"

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Table reservation request — ${form.name || "Guest"}`
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nGuests: ${form.guests}\n\n${form.message}`
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/80" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Contact
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Reserve your table on the terrace
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/70">
              Call us for reservations, or send a request and our team will get
              back to you to confirm your table. Deliveries are available via
              Glovo.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-4 transition-opacity hover:opacity-80"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-white/10">
                  <Phone className="size-5 text-white" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/50">
                    Call us
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 transition-opacity hover:opacity-80"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-white/10">
                  <Mail className="size-5 text-white" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/50">
                    Email
                  </span>
                  <span className="text-lg font-semibold text-white">{site.email}</span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin className="size-5 text-white" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/50">
                    Address
                  </span>
                  <span className="text-lg font-semibold text-white">{site.address}</span>
                </span>
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-3 text-xs uppercase tracking-widest text-white/50">
                Follow us
              </p>
              <div className="flex flex-wrap gap-3">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
                  >
                    {social.label} <ExternalLink className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Reservation request
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill this in and we'll confirm by email or phone.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={set("name")}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    placeholder="e.g. 07XX XXX XXX"
                    value={form.phone}
                    onChange={set("phone")}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="date" className="text-sm font-medium text-foreground">
                    Date
                  </label>
                  <Input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={set("date")}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="guests" className="text-sm font-medium text-foreground">
                    Guests
                  </label>
                  <Input
                    id="guests"
                    type="number"
                    min={1}
                    max={20}
                    placeholder="2"
                    value={form.guests}
                    onChange={set("guests")}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Special requests
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Birthday, allergies, preferred table..."
                  value={form.message}
                  onChange={set("message")}
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="size-4" /> Send Reservation Request
              </Button>

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                <MessageCircle className="size-3.5" />
                Opens your email app with the request pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}