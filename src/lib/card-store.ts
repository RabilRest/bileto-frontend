"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = { ticketId: string; name: string; price: number; qty: number };
type Cart = {
  eventId: string | null;
  voucher: { id: string; code: string; discount: number } | null;
  items: CartItem[];
  setCart: (c: Partial<Cart>) => void;
  clear: () => void;
};

export const useCartStore = create<Cart>()(
  persist(
    (set) => ({
      eventId: null,
      voucher: null,
      items: [],
      setCart: (c) => set((s) => ({ ...s, ...c })),
      clear: () => set({ eventId: null, voucher: null, items: [] }),
    }),
    { name: "cart" }
  )
);
