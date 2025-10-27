"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSession ,signIn} from "next-auth/react";
import { useCartStore } from "@/lib/card-store";

function formatIDR(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function CheckoutPage() {
  const { status } = useSession(); // ensured by middleware, but nice to have
  const sp = useSearchParams();
  const router = useRouter();
  const eventId = sp.get("event");
  const { items, voucher, clear } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  // Guard empty cart
  useEffect(() => {
    if (!eventId || items.length === 0) {
      router.replace("/");
    }
  }, [eventId, items.length, router]);

  const subtotal = useMemo(() => items.reduce((s, x) => s + x.price * x.qty, 0), [items]);
  const discount = voucher?.discount ?? 0;
  const total = Math.max(0, subtotal - discount);

  async function createTransaction() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId,
          voucherCode: voucher?.code ?? null,
          items: items.map((i) => ({ ticketId: i.ticketId, qty: i.qty })),
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Failed to create transaction");
      }
      const { orderId } = await res.json();
      setSuccessId(orderId);
      clear(); // empty cart
      // route to success/payment page (choose your path)
      router.replace(`/payment/${orderId}`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  // Basic UI
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-3">
        {items.map((i) => (
          <div key={i.ticketId} className="flex justify-between text-sm">
            <span>{i.name} × {i.qty}</span>
            <span className="font-medium">{formatIDR(i.price * i.qty)}</span>
          </div>
        ))}
        <hr />
        <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span>{formatIDR(subtotal)}</span></div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Voucher {voucher ? `(${voucher.code})` : ""}</span>
          <span className={discount ? "text-green-600" : ""}>{discount ? `- ${formatIDR(discount)}` : formatIDR(0)}</span>
        </div>
        <div className="flex justify-between text-base font-semibold"><span>Total</span><span>{formatIDR(total)}</span></div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          onClick={createTransaction}
          disabled={loading || items.length === 0}
          className="mt-2 w-full rounded-xl bg-[#1E63F6] py-3 text-white font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </main>
  );
}
