import { Leaf } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { menuCategories, formatKsh } from "@/data/menu"

export function MenuSection() {
  return (
    <section id="menu" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            The Menu
          </p>
          <h2 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            An expansive Italian menu
          </h2>
          <p className="mt-4 text-muted-foreground">
            Homemade pasta, wood-fired pizza, fresh seafood and classic Italian
            dishes — all prepared to order. Prices in Kenyan Shillings.
          </p>
        </div>

        <Tabs defaultValue={menuCategories[0].id} className="mt-12">
          <div className="mx-auto w-full max-w-4xl overflow-x-auto pb-2">
            <TabsList variant="line" className="w-full justify-start">
              {menuCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mx-auto max-w-4xl">
                <p className="mb-8 text-center font-serif text-lg italic text-muted-foreground">
                  {category.tagline}
                </p>
                <div className="grid gap-x-10 gap-y-2 md:grid-cols-2">
                  {category.items.map((item) => (
                    <div key={item.name} className="group rounded-xl p-3 transition-colors hover:bg-background">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {item.name}
                          {item.vegetarian && (
                            <span className="ml-2 align-middle">
                              <Badge variant="outline" className="gap-1 border-green-600/30 bg-green-50 px-1.5 py-0 text-[10px] font-medium text-green-700">
                                <Leaf className="size-3" /> Vg
                              </Badge>
                            </span>
                          )}
                        </h3>
                        <span className="shrink-0 border-b border-dotted border-foreground/25" />
                        <span className="shrink-0 font-medium tabular-nums text-primary">
                          {formatKsh(item.price)}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          <Leaf className="mr-1 inline size-4 text-green-600" />
          (Vg) marks vegetarian dishes. A seasonal wine list and dessert menu
          are available in house.
        </p>
      </div>
    </section>
  )
}