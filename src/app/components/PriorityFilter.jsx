"use client";

export default function PriorityFilter({ value = "All", onChange }) {
  return (
    <label className="flex flex-col text-sm">
      <span className="mb-1">Priority</span>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="rounded-md bg-black/30 p-2 border-gray-700"
      >
        <option>All</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>
    </label>
  );
}
