import { palette } from "styles/palette";
import { Clocks } from "./Clocks";
import { LuClock3 } from "react-icons/lu";

export function Time() {
  return (
    <div className="d-flex align-items-center justify-content-center gap-3">
      <LuClock3 color={palette.main} size={18} />
      <Clocks />
    </div>
  );
}
