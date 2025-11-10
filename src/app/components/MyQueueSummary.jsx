"use client";

export default function MyQueueSummary({ items = [], onRemove, onClear }) {
  return (
    <section className="mt-6 rounded-xl border border-gray-700 p-4">
      <h2 className="font-semibold mb-2">My Queue</h2>
      <p className="text-sm text-gray-400">
        {items.length
          ? `${items.length} selected`
          : "No tickets in your queue."}
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={onClear}
          className="rounded-md border border-gray-700 px-3 py-2 text-sm"
        >
          Clear Queue
        </button>
      </div>
    </section>
  );
}
