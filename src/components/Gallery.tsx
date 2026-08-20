const images = [
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    alt: "Wood-fired Italian pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
    alt: "Glasses of Italian wine",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    alt: "Fresh garden salad",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    alt: "Grilled beef fillet",
  },
  {
    src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80",
    alt: "Seafood pasta",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
    alt: "Italian dessert",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
    alt: "Craft cocktails at the bar",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    alt: "La Terrazza dining experience",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Gallery
          </p>
          <h2 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            A feast for all the senses
          </h2>
          <p className="mt-4 text-muted-foreground">
            From the kitchen to the rooftop — a glimpse of what awaits you at
            La Terrazza.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {images.map((image, i) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl ${
                i % 3 === 0 ? "row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full min-h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-white">{image.alt}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}