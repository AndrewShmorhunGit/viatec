export function Description({ text }: { text: string }) {
  return (
    <p
      role="task-description"
      className="fs-5"
      style={{ paddingRight: "4rem" }}
    >
      {text}
    </p>
  );
}
