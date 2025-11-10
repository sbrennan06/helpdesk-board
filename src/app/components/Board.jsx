"use client";

import { useEffect, useState } from "react";
import StatusFilter from "./StatusFilter";
import PriorityFilter from "./PriorityFilter";
import SearchBox from "./SearchBox";
import TicketList from "./TicketList";

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const res = await fetch("/api/tickets");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (isMounted) setTickets(data);
      } catch (err) {
        if (isMounted) setError(err.message || "Failed to load");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Ticket List functions will render - fetch from api/tickets */}
        <div className="col-span-full text-sm text-gray-400">
          Filter by status and priority, search by keyword, and add tickets to
          your queue.
        </div>
      </div>

      {loading && <p className="text-sm text-gray-400">Loading....</p>}
      {error && <p className="text-sm text-red-400">Unable to load tickets.</p>}
      {!loading && !error && (
        <p className="text-sm text-gray-400">
          Loaded {tickets.length} tickets.
        </p>
      )}
      {!loading && !error && tickets.length > 0 && (
        <TicketList tickets={tickets} />
      )}
      {/* Queue & messages will appear here */}
    </section>
  );
}
