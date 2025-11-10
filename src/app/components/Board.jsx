"use client";

import { useEffect, useState } from "react";

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
        try {
            const res = await fetch('/api/tickets');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await.res.json();
            if (isMounted) setTickets(data);
        } catch (err) {
            if (isMounted) setError(err.message || 'Failed to load');
        } finally {
            if (isMounted) setLoading(false);
        }
    }
    
    load();
    return() => { isMounted = false; };
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

      {/* Queue & messages will appear here */}
    </section>
  );
}
