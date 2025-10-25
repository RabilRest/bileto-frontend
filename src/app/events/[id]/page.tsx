"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import {
  MapPin,
  Calendar,
  Clock,
  User,
  Minus,
  Plus,
  Ticket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

/** ---------- Mock data (replace with real fetch) ---------- */
type TicketType = { id: string; name: string; desc?: string; price: number; stock?: number };
type Voucher = { id: string; code: string; label: string; discount: number }; // discount in IDR
type EventDetail = {
  id: string;
  title: string;
  image: string;
  location: string;
  date: string;   // ex: "Dec 02, 2025"
  time: string;   // ex: "19:00 WIB"
  organizer: {name:string ; slug:string}
  description: string;
  tickets: TicketType[];
  vouchers: Voucher[];
};

// pretend DB
const DB: Record<string, EventDetail> = {
  "1": {
    id: "1",
    title: "Raisa Showcase",
    image: "/event2.webp",
    location: "Jakarta",
    date: "Dec 2, 2025",
    time: "19:00 WIB",
    organizer: {name: "Raisa Entertainment", slug: "raisa-entertainment"},
    description:
      "Raisa Showcase is an intimate concert experience featuring acoustic sets, special guests, and limited-edition merchandise. Doors open at 18:00 WIB. Venue: JCC Senayan.",
    tickets: [
      { id: "t1", name: "CAT 1 (FRONT ROW)", desc: "Best view near stage", price: 2_000_000, stock: 50 },
      { id: "t2", name: "CAT 2", desc: "Great view", price: 1_500_000, stock: 120 },
      { id: "t3", name: "General Admission", desc: "Standing", price: 500_000, stock: 300 },
    ],
    vouchers: [
      { id: "v1", code: "EARLYBIRD", label: "Early Bird - Rp 50.000 OFF", discount: 50_000 },
      { id: "v2", code: "STUDENT", label: "Student - Rp 25.000 OFF", discount: 25_000 },
    ],
  },
  "2": {
    id: "2",
    title: "Art Pop-Up",
    image: "/event3.webp",
    location: "Semarang",
    date: "Feb 4, 2026",
    time: "10:00 WIB",
    organizer: {name: "Kreasi Studio", slug: "kreasi-studio"},
    description:
      "A one-day art pop-up with local artists, prints, and workshops. Venue: Kota Lama.",
    tickets: [
      { id: "t1", name: "Workshop Pass", price: 150_000, stock: 40 },
      { id: "t2", name: "Exhibition Only", price: 75_000, stock: 200 },
    ],
    vouchers: [{ id: "v3", code: "FAMILY", label: "Family - Rp 10.000 OFF", discount: 10_000 }],
  },
   "3": {
    id: "3",
    title: "Jakarta Night Run 2025",
    image: "/event4.webp",
    location: "Jakarta",
    date: "Nov 29, 2025",
    time: "21:00 WIB",
    organizer: {name :"Jakarta Sport League", slug: "jakarta-sport-league"  },
    description:
      "Experience the thrill of the city at night with Jakarta Night Run! A 10K marathon under city lights, complete with live DJ performances, free hydration stations, and finisher medals. Meeting point: GBK Stadium.",
    tickets: [
      { id: "t1", name: "10K Race", desc: "Includes race pack & medal", price: 350_000, stock: 250 },
      { id: "t2", name: "5K Fun Run", desc: "For casual runners", price: 200_000, stock: 300 },
    ],
    vouchers: [
      { id: "v1", code: "RUNBUDDY", label: "Bring a Friend - Rp 20.000 OFF", discount: 20_000 },
      { id: "v2", code: "STUDENTRUN", label: "Student - Rp 15.000 OFF", discount: 15_000 },
    ],
  },

  "4": {
    id: "4",
    title: "Bali Food & Jazz Festival 2026",
    image: "/event5.webp",
    location: "Denpasar",
    date: "Mar 16, 2026",
    time: "17:00 WIB",
    organizer: {name: "Bali Experience Group", slug: "bali-experience-group"},
    description:
      "A two-day blend of gourmet cuisine and smooth jazz at the heart of Bali. Enjoy live music from international artists while tasting signature dishes from top local chefs. Venue: Beachwalk Mall Outdoor Stage.",
    tickets: [
      { id: "t1", name: "General Pass (Day 1)", desc: "Access to all food booths & live shows", price: 250_000, stock: 400 },
      { id: "t2", name: "General Pass (Day 2)", desc: "Access to all food booths & live shows", price: 250_000, stock: 400 },
      { id: "t3", name: "2-Day VIP Pass", desc: "Includes reserved seating & free drink", price: 600_000, stock: 100 },
    ],
    vouchers: [
      { id: "v1", code: "BALI20", label: "20% OFF for Locals", discount: 50_000 },
      { id: "v2", code: "EARLYFOODIE", label: "Early Bird - Rp 25.000 OFF", discount: 25_000 },
    ],
  },

  "5": {
    id: "5",
    title: "Startup Business Summit 2026",
    image: "/event6.webp",
    location: "Bandung",
    date: "Apr 22, 2026",
    time: "09:00 WIB",
    organizer: {name:"TechConnect Indonesia", slug:"techconnect-indonesia"},
    description:
      "Join Indonesia’s largest startup ecosystem event. Network with investors, attend keynote sessions from founders, and join startup pitch battles. Venue: Trans Convention Center, Bandung.",
    tickets: [
      { id: "t1", name: "General Admission", desc: "Access to talks & networking zone", price: 300_000, stock: 500 },
      { id: "t2", name: "VIP Pass", desc: "Includes priority seating & lunch", price: 700_000, stock: 100 },
      { id: "t3", name: "Startup Booth", desc: "Includes 2 entry passes & booth space", price: 1_500_000, stock: 20 },
    ],
    vouchers: [
      { id: "v1", code: "EARLYPITCH", label: "Early Bird - Rp 50.000 OFF", discount: 50_000 },
      { id: "v2", code: "STUDENTBIZ", label: "Student - Rp 30.000 OFF", discount: 30_000 },
    ],
  },

  "6": {
    id: "6",
    title: "Surabaya Dating Festival 2026",
    image: "/event7.webp",
    location: "Surabaya",
    date: "May 5, 2026",
    time: "18:00 WIB",
    organizer: {name:"Cupid Events Asia", slug:"cupid-events-asia"},
    description:
      "Meet, mingle, and make connections! A fun evening event for singles featuring live acoustic music, icebreaker games, and relationship workshops. Venue: Grand City Mall Ballroom, Surabaya.",
    tickets: [
      { id: "t1", name: "Single Entry", desc: "Includes welcome drink & gift bag", price: 250_000, stock: 200 },
      { id: "t2", name: "Couple Entry", desc: "Perfect for friends or new couples", price: 400_000, stock: 150 },
      { id: "t3", name: "VIP Lounge", desc: "Access to exclusive lounge & photo area", price: 600_000, stock: 80 },
    ],
    vouchers: [
      { id: "v1", code: "LOVE2026", label: "Valentine Offer - Rp 20.000 OFF", discount: 20_000 },
      { id: "v2", code: "EARLYHEART", label: "Early Bird - Rp 15.000 OFF", discount: 15_000 },
    ],
  },
};


function formatIDR(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

/** ---------- Page Component ---------- */
export default function EventDetailsPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const data = DB[params.id]; // replace with real fetch based on params.id

  const [activeTab, setActiveTab] = useState<"desc" | "tickets">("desc");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [voucher, setVoucher] = useState<Voucher | null>(null);

  if (!data) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-gray-600">Event not found.</p>
      </main>
    );
  }

  const cartItems = useMemo(
    () =>
      data.tickets
        .map((t) => ({ ...t, qty: quantities[t.id] || 0 }))
        .filter((t) => t.qty > 0),
    [data.tickets, quantities]
  );

  const subtotal = cartItems.reduce((sum, t) => sum + t.price * t.qty, 0);
  const discount = voucher ? voucher.discount : 0;
  const total = Math.max(0, subtotal - discount);

  const inc = (id: string) =>
    setQuantities((q) => ({ ...q, [id]: Math.min((q[id] || 0) + 1, getStock(id)) }));
  const dec = (id: string) =>
    setQuantities((q) => ({ ...q, [id]: Math.max((q[id] || 0) - 1, 0) }));

  function getStock(id: string) {
    const t = data.tickets.find((x) => x.id === id);
    return t?.stock ?? 9999;
  }

  function handleCheckout() {
    if (cartItems.length === 0) return alert("Choose at least one ticket.");
    // In real app, persist cart to state/store and route to checkout page
    router.push(`/checkout?event=${data.id}`);
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN (spans 2) */}
        <section className="lg:col-span-2">
          {/* Main image */}
          <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={data.image}
              alt={data.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>

          {/* Vouchers */}
          {data.vouchers.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Vouchers</p>
              <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {data.vouchers.map((v) => {
                  const active = voucher?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setVoucher(active ? null : v)}
                      className={[
                        "rounded-xl border px-4 py-2 text-sm whitespace-nowrap transition",
                        active
                          ? "border-[#1E63F6] bg-[#1E63F6]/5 text-[#1E63F6] font-semibold"
                          : "border-gray-300 text-gray-700 hover:border-gray-400",
                      ].join(" ")}
                      aria-pressed={active}
                    >
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="mt-6">
            <div className="inline-flex rounded-xl border border-gray-200 p-1 bg-white">
              <button
                onClick={() => setActiveTab("desc")}
                className={`px-4 py-2 text-sm rounded-lg ${
                  activeTab === "desc"
                    ? "bg-[#1E63F6] text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("tickets")}
                className={`px-4 py-2 text-sm rounded-lg ${
                  activeTab === "tickets"
                    ? "bg-[#1E63F6] text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Tickets
              </button>
            </div>

            {/* Tab content */}
            <div className="mt-4">
              {activeTab === "desc" ? (
                <div className="rounded-2xl border border-gray-200 bg-white p-5 leading-7 text-gray-700">
                  {data.description}
                </div>
              ) : (
                <div className="space-y-4">
                  {data.tickets.map((t) => (
                    <div
                      key={t.id}
                      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <Ticket className="h-4 w-4 text-gray-500" />
                            <h3 className="font-semibold">{t.name}</h3>
                          </div>
                          {t.desc && (
                            <p className="text-sm text-gray-500 mt-1">
                              {t.desc}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-6">
                          <p className="text-lg font-semibold">
                            {formatIDR(t.price)}
                          </p>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => dec(t.id)}
                              className="h-9 w-9 rounded-lg bg-orange-500 text-white grid place-items-center hover:opacity-90"
                              aria-label="decrease"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-6 text-center tabular-nums">
                              {quantities[t.id] || 0}
                            </span>
                            <button
                              onClick={() => inc(t.id)}
                              className="h-9 w-9 rounded-lg bg-orange-500 text-white grid place-items-center hover:opacity-90"
                              aria-label="increase"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-4">
          {/* Title + meta */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h1 className="text-2xl font-bold mb-3">{data.title}</h1>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                {data.location}
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                {data.date}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                {data.time}
              </li>
            </ul>
            


<div className="mt-4 flex items-center gap-2 text-gray-700">
  <User className="h-4 w-4 text-gray-500" />
  <span className="text-sm">
    Organizer:{" "}
    <Link
      href={`/organizers/${data.organizer.slug}`}
      className="font-medium text-blue-600 hover:underline"
    >
      {data.organizer.name}
    </Link>
  </span>
</div>

          </div>

          {/* Checkout box */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h2 className="font-semibold mb-3 flex items-center gap-2">
              <ShoppingCart className="h-4 w-4 text-gray-600" />
              Checkout
            </h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-sm">
                No tickets selected yet. Go to the <b>Tickets</b> tab and add
                quantities.
              </p>
            ) : (
              <div className="space-y-2">
                {cartItems.map((t) => (
                  <div key={t.id} className="flex items-center justify-between text-sm">
                    <span>
                      {t.name} × {t.qty}
                    </span>
                    <span className="font-medium">
                      {formatIDR(t.price * t.qty)}
                    </span>
                  </div>
                ))}
                <hr className="my-2" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span>{formatIDR(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Voucher {voucher ? `(${voucher.code})` : ""}
                  </span>
                  <span className={discount ? "text-green-600" : ""}>
                    {discount ? `- ${formatIDR(discount)}` : formatIDR(0)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>{formatIDR(total)}</span>
                </div>
              </div>
            )}

            <button
              onClick={handleCheckout}
              className="mt-4 w-full rounded-xl bg-[#1E63F6] py-3 text-white font-semibold hover:opacity-90 disabled:opacity-50"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </div>

      {/* Recommendations section (placeholder) */}
      <section className="mt-10">
        <h3 className="text-lg font-semibold mb-4">You might also like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace with real recommended events */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-5 text-gray-600"
            >
              Recommendation #{i}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
