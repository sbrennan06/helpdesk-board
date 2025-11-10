"use client";

export default function StatusFilter({ value = "All", onChange }) {
  return (
    <label className="flex flex-col text-sm">
      <span className="mb-1">Status</span>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="rounded-md bg-black/30 p-2 border border-gray-700"
      >
        <option>All</option>
        <option>Open</option>
        <option>In Progress</option>
        <option>On Hold</option>
        <option>Resolved</option>
      </select>
    </label>
  );
}
