"use client";

export default function TicketCard({ ticket, onAddToQueue, disabled }) {
  return (
    <article className="rounded-xl border border-gray-700 p-4">
      <h3 className="font-semibold">{ticket?.title || "Ticket Title"}</h3>
      <button
        disabled={disabled}
        className="mt-3 w-full rounded-md bg-blue-600 px-3 py-2 text-white disabled:opacity-50"
      >
        Add to My Queue
      </button>
    </article>
  );
}
