"use client";

export default function Board() {
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
