/* app/events/page.tsx */
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

type SearchParams = { q?: string; location?: string };

type EventItem = {
  id: number;
  title: string;
  date: string;     // "Nov 10, 2025"
  price: number;    // 150000
  image: string;    // "/images/..."
  href: string;     // "/events/1"
  location: "jakarta" | "bandung" | "medan" | "semarang";
  category: "music" | "nightlife" | "dating" | "arts" | "food" | "business";
};

const EVENTS: EventItem[] = [
  { id: 1, title: "Moist Launch",  date: "Nov 10, 2025", price: 150000, image: "/event1.webp", href: "/events/1", location: "jakarta",  category: "business" },
  { id: 2, title: "Raisa Showcase", date: "Dec 2, 2025",  price: 100000, image: "/event2.webp", href: "/events/2", location: "bandung",  category: "music" },
  { id: 3, title: "Night Market Party", date: "Jan 15, 2026", price: 250000, image: "/event3.webp", href: "/events/3", location: "medan",    category: "nightlife" },
  { id: 4, title: "Art Pop-Up",     date: "Feb 4, 2026",  price: 75000,  image: "/event4.webp", href: "/events/4", location: "semarang", category: "arts" },
];

function formatIDR(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function EventsPage({ searchParams }: { searchParams: SearchParams }) {
  const q = (searchParams.q ?? "").toLowerCase();
  const loc = (searchParams.location ?? "all").toLowerCase();

  const filtered = EVENTS.filter((e) => {
    const matchesLocation = loc === "all" || e.location === loc;
    const matchesQuery =
      !q ||
      e.title.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q);
    return matchesLocation && matchesQuery;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex items-baseline justify-between">
        <h1 className="text-2xl font-bold">
          Events {loc !== "all" ? `in ${loc[0].toUpperCase() + loc.slice(1)}` : ""}
          {q ? ` — “${q}”` : ""}
        </h1>
        <p className="text-sm text-gray-500">{filtered.length} result(s)</p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-600">No events found. Try a different search or location.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((event) => (
            <Link
              key={event.id}
              href={event.href}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
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
                <p className="text-xl font-semibold mt-1">{formatIDR(event.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      
    </main>
    
  );
}
