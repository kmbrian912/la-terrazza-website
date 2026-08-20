import { useEffect, useState } from "react"
import { Menu, Phone, Star } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { site } from "@/data/site"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#visit" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-serif text-lg italic text-primary">
            LT
          </span>
          <span
            className={cn(
              "font-serif text-xl font-semibold tracking-wide",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            La Terrazza
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/75 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "text-foreground" : "text-white"}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl">La Terrazza</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-2 px-2">
                <a href={site.orderUrl} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full">
                    Order Online
                  </Button>
                </a>
                <a href="#contact">
                  <Button className="w-full bg-primary text-primary-foreground">
                    <Phone className="size-4" /> Reserve a Table
                  </Button>
                </a>
                <a href={`tel:${site.phoneHref}`} className="mt-2 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                  <Star className="size-3.5 fill-amber-400 text-amber-400" />
                  {site.rating} · {site.reviewCount.toLocaleString()} reviews
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}