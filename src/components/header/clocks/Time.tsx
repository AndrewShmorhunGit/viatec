import { Clocks } from "./Clocks";
import { LuClock3 } from "react-icons/lu";

export function Time() {
  return (
    <div className="d-flex align-items-center justify-content-center gap-3">
      <LuClock3 style={{ color: "#5795a7" }} size={18} />
      <Clocks />
    </div>
  );
}
