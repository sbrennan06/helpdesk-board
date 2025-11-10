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
  const [filters, setFilters] = useState({ status: "All", priority: "All" });
  const [search, setSearch] = useState("");

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

  const visibleTickets = tickets.filter((t) => {
    const statusOk = filters.status === "All" || t.status === filters.status;
    const priorityOk =
      filters.priority === "All" || t.priority === filters.priority;
    const q = search.trim().toLowerCase();
    const text = `${t.title} ${t.description}`.toLowerCase();
    const searchOk = q === "" || text.includes(q);
    return statusOk && priorityOk && searchOk;
  });

  return (
    <section className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="col-span-full grid gap-3 md:grid-cols-3">
          <StatusFilter
            value={filters.status}
            onChange={(v) => setFilters((f) => ({ ...f, status: v }))}
          />
          <PriorityFilter
            value={filters.priority}
            onChange={(v) => setFilters((f) => ({ ...f, priority: v }))}
          />
          <SearchBox value={search} onChange={setSearch} />
        </div>
      </div>

      {loading && <p className="text-sm text-gray-400">Loading....</p>}
      {error && <p className="text-sm text-red-400">Unable to load tickets.</p>}
      {!loading && !error && (
        <p className="text-sm text-gray-400">
          Showing {visibleTickets.length} tickets.
        </p>
      )}
      {!loading && !error && visibleTickets.length > 0 && (
        <TicketList tickets={visibleTickets} />
      )}
      {!loading && !error && visibleTickets.length === 0 && (
        <p className="text-sm text-gray-400">No tickets match your filters.</p>
      )}
    </section>
  );
}
