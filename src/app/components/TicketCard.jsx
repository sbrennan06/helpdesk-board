"use client";

export default function TicketCard({ ticket, onAddToQueue, disabled }) {
  const { title, description, priority, status, assignee, updatedAt } =
    ticket || {};

  return (
    <article className="rounded-xl border border-gray-700 p-4">
      <p className="text-xs text-gray-400">
        Priority: <span className="text-gray-200">{priority}</span>
      </p>
      <p className="text-xs text-gray-400">
        Status: <span className="text-gray-200">{status}</span>
      </p>
      <h3 className="mt-2 font-semibold">{title || "Ticket Title"}</h3>
      <p className="mt-1 text-sm text-gray-400">{description}</p>

      <p className="mt-3 text-xs text-gray-500">
        Assignee: {assignee || "Unassigned"}
      </p>

      <p className="text-xs text-gray-500">
        Updated: {updatedAt ? new Date(updatedAt).toLocaleString() : "-"}
      </p>

      <button
        className="mt-3 w-full rounded-md bg-blue-600 px-3 py-2 text-white disabled:opacity-50"
        onClick={() => onAddToQueue?.(ticket?.id)}
        disabled={disabled}
        aria-label={`Add ${title} || 'ticket'} to My Queue`}
      >
        Add to My Queue
      </button>
    </article>
  );
}
