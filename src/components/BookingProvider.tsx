"use client";

import { createContext, useContext, useState } from "react";
import { BookingModal } from "./BookingModal";

const BookingContext = createContext<{ openBooking: (itemId?: string) => void }>({
  openBooking: () => {},
});

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemId, setItemId] = useState<string | undefined>();

  const openBooking = (id?: string) => {
    setItemId(id);
    setIsOpen(true);
  };

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} itemId={itemId} />
    </BookingContext.Provider>
  );
}
