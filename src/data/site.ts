export const site = {
  name: "La Terrazza",
  fullName: "La Terrazza Italian Restaurant, Lounge & Art Gallery",
  shortName: "La Terrazza",
  tagline: "Authentic Italian Restaurant in the Heart of Nairobi",
  taglineIt: "Benvenuti a La Terrazza",
  phoneDisplay: "0748 101 503",
  phoneHref: "tel:+254748101503",
  email: "info@laterrazzarestaurant.co.ke",
  address: "Ground Floor, The Rhapta Promenade Mall, Rhapta Road, Nairobi, Kenya",
  rating: 4.5,
  reviewCount: 1054,
  orderUrl:
    "https://glovoapp.com/ke/en/nairobi/la-terrazza-italian-restaurant-nairobi-nbo/",
  mapsUrl:
    "https://www.google.com/maps/dir//La+Terrazza+Italian+Restaurant+Nairobi/data=!4m8!4m7!1m0!1m5!1m1!1s0x182f11c452f09219:0x6fad43788e0c402b!2m2!1d36.784863699999995!2d-1.2640179999999999",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/la_terrazza_restaurant_nairobi/?hl=en",
    },
    {
      label: "Facebook",
      href: "https://web.facebook.com/Laterrazzanairobi/",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/LaTerrazzaNRB",
    },
    {
      label: "TripAdvisor",
      href: "https://www.tripadvisor.com/Restaurant_Review-g294207-d15360946-Reviews-La_Terrazza_Italian_Restaurant_Lounge_Art_Gallery-Nairobi.html",
    },
  ],
} as const

export const hours: { day: string; time: string }[] = [
  { day: "Monday", time: "11:30 AM – 10:00 PM" },
  { day: "Tuesday", time: "11:30 AM – 10:00 PM" },
  { day: "Wednesday", time: "11:30 AM – 10:00 PM" },
  { day: "Thursday", time: "11:30 AM – 10:00 PM" },
  { day: "Friday", time: "11:30 AM – 10:30 PM" },
  { day: "Saturday", time: "11:30 AM – 10:30 PM" },
  { day: "Sunday", time: "11:30 AM – 9:30 PM" },
]

export const highlights: string[] = [
  "Great wine list",
  "Rooftop seating",
  "Great cocktails",
  "Great desserts",
  "Great coffee & tea",
  "Great beer selection",
]

export const atmosphere: string[] = [
  "Casual",
  "Cozy",
  "Romantic",
  "Trendy",
  "Upscale",
  "Family-friendly",
]

export const amenities: string[] = [
  "Bar on site",
  "Free Wi-Fi",
  "Table service",
  "Wheelchair accessible",
  "Accepts credit cards",
  "NFC mobile payments",
]