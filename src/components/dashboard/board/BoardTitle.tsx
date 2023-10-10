export function BoardTitle({ index }: { index: number }) {
  const createTitle = (index: number): string => {
    if (index === 0) return "to do";
    if (index === 1) return "in progress";
    return "done";
  };

  return (
    <h5
      className="text-center"
      style={{ textTransform: "capitalize", paddingBottom: "1.2rem" }}
    >
      {createTitle(index)}
    </h5>
  );
}
