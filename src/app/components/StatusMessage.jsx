"use client";

export default function StatusMessage({ state = "idle", message }) {
  const text =
    message ||
    (state === "loading"
      ? "Loading...."
      : state === "error"
      ? "Unable to load tickets."
      : state === "empty"
      ? "No tickets match your filters."
      : "");
  return text ? <p className="text-sm text-gray-400">{textA}</p> : null;
}
