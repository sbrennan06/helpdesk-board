"use client";

export default function SearchBox({ value = "", onChange }) {
  return (
    <label className="flex flex-col text-sm">
      <span className="mb-1">Search</span>
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="Search title or description"
        className="rounded-md bg-black/30 p-2 border border-gray-700"
      />
    </label>
  );
}
