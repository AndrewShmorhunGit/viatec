import { Clocks } from "./Clocks";
import { LuClock3 } from "react-icons/lu";

export function Time() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.2rem",
      }}
    >
      <LuClock3 style={{ color: "#5795a7" }} size={18} />
      <Clocks />
    </div>
  );
}
