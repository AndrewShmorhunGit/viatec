import { createTitle } from "utils/functions";

export function BoardTitle({ index }: { index: number }) {
  return (
    <h3 className="text-center text-capitalize pb-4">{createTitle(index)}</h3>
  );
}
