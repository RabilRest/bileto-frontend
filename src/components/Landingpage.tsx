import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Location = "all" | "jakarta" | "bandung" | "surabaya" | "semarang";
type Category = "all" | "music" | "nightlife" | "dating" | "arts" | "food" | "business";

type EventItem = {
  id: number;
  title: string;
  date: string;
  price: number;
  image: string;
  href: string;
  location: Exclude<Location, "all">;
  category: Exclude<Category, "all">;
  organizer: { name: string; slug: string }; // 👈 add this
};

const events: EventItem[] = [
  {
    id: 1,
    title: "Moist Launch",
    date: "Nov 10, 2025",
    price: 150000,
    image: "/event1.webp",
    href: "/events/1",
    location: "jakarta",
    category: "business",
    organizer: { name: "Moist Labs", slug: "moist-labs" }, // 👈
  },
  {
    id: 2,
    title: "Raisa Showcase",
    date: "Dec 2, 2025",
    price: 100000,
    image: "/event2.webp",
    href: "/events/2",
    location: "bandung",
    category: "music",
    organizer: { name: "Raisa Entertainment", slug: "raisa-entertainment" },
  },
  {
    id: 3,
    title: "IBL 2025 Party",
    date: "Jan 15, 2026",
    price: 250000,
    image: "/event3.webp",
    href: "/events/3",
    location: "surabaya",
    category: "nightlife",
    organizer: { name: "IBL Events", slug: "ibl-events" },
  },
  // …add more with correct location & category
];

const categoryPills: {
  key: Exclude<Category, "all">;
  label: string;
  icon: string;
}[] = [
  { key: "music", label: "Music", icon: "🎵" },
  { key: "nightlife", label: "Nightlife", icon: "🌙" },
  { key: "dating", label: "Dating", icon: "💞" },
  { key: "arts", label: "Arts", icon: "🎨" },
  { key: "food", label: "Food", icon: "🍽️" },
  { key: "business", label: "Business", icon: "💼" },
];

function formatIDR(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

const Landingpage = () => {
  const images = ["/coway.png", "/coway2.jpg"];
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const [location, setLocation] = useState<Location>("all");
  const [category, setCategory] = useState<Category>("all");

  const filtered = useMemo(
    () =>
      events.filter(
        (e) =>
          (location === "all" || e.location === location) &&
          (category === "all" || e.category === category)
      ),
    [location, category]
  );
  return (
    <div className="w-screen ml-0">
      <div className="flex mt-0 justify-center min-h-screen bg-gray-100">
        <div className="mt-20">
          <div className="relative flex w-screen h-120 mb-10 overflow-hidden ">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
          ${index === current ? "opacity-100" : "opacity-0"}
        `}
              >
                <button
                  className="absolute top-[50%] left-8 text-3xl text-white z-10"
                  onClick={prevSlide}
                >
                  {" "}
                  &#10094;{" "}
                </button>
                <div
                  className="absolute inset-0 pointer-events-none 
    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] 
    [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                >
                  <Image
                    src={img}
                    alt="Vercel Logo"
                    width={1400}
                    height={1000}
                    className="h-full w-screen md:object-cover object-contain "
                    priority
                  />
                </div>

                <button
                  className="absolute top-[50%] right-8 text-3xl text-white z-10"
                  onClick={nextSlide}
                >
                  {" "}
                  &#10095;{" "}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category icons row (right) */}
      <div className="w-full md:w-auto">
        <p className="text-sm font-medium text-gray-700 mb-2">Category</p>
        <div className="flex items-center gap-6 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* “All” button */}
          <button
            onClick={() => setCategory("all")}
            className={`text-sm whitespace-nowrap focus:outline-none ${
              category === "all"
                ? "font-semibold text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
            aria-pressed={category === "all"}
          >
            All
          </button>

          {categoryPills.map((c) => {
            const active = category === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setCategory(active ? "all" : c.key)} // tap again to clear
                className="group flex flex-col items-center gap-2 focus:outline-none w-full"
                aria-pressed={active}
              >
                <span
                  className={[
                    "flex h-20 w-20 items-center justify-center rounded-full border transition-all",
                    active
                      ? "border-black shadow-md"
                      : "border-gray-400/50 group-hover:border-gray-600",
                  ].join(" ")}
                >
                  <span className="text-2xl">{c.icon}</span>
                </span>
                <span
                  className={
                    active
                      ? "text-white md:text-black font-medium"
                      : "text-gray-300 md:text-gray-500"
                  }
                >
                  {c.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((event) => (
          <Link
            key={event.id}
            href={event.href}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-gray-500 text-sm">{event.date}</p>
              <p className="text-xl font-semibold mt-1">
                {formatIDR(event.price)}
              </p>
                <Link
    href={`/organizers/${event.organizer.slug}`}
    className="mt-2 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
  >
    <span>by</span>
    <span className="font-medium">{event.organizer.name}</span>
  </Link>
</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Landingpage;
