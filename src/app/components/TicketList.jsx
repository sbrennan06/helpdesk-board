"use client";

import TicketCard from "./TicketCard";

export default function TicketList({ tickets = [], onAddToQueue }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {tickets.map((t) => (
        <TicketCard key={t.id} ticket={t} />
      ))}
    </div>
  );
}
