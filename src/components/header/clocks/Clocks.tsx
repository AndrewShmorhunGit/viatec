"use client";
import { useClocks } from "hooks/useClocks";

export function Clocks() {
  const { time } = useClocks();
  return <div className="text-center fs-3 fw-bold">{time}</div>;
}
