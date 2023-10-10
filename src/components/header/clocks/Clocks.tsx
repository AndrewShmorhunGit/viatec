"use client";
import { useClocks } from "hooks/useClocks";

export function Clocks() {
  const { time } = useClocks();
  return (
    <div className="text-center" style={{ fontSize: "1.6rem" }}>
      {time}
    </div>
  );
}
