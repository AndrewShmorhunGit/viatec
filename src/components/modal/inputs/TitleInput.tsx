export function TitleInput({
  invalidTitle,
  isTitle,
  handleTitleChange,
}: {
  invalidTitle: boolean;
  isTitle: string;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mb-3">
      {invalidTitle ? (
        <label
          htmlFor="formTitleInput"
          style={{ color: "orangered", textTransform: "capitalize" }}
        >
          Title must be filled
        </label>
      ) : (
        <label htmlFor="formTitleInput" className="form-label">
          Title
        </label>
      )}
      <input
        type="text"
        className={`form-control ${invalidTitle && "is-invalid"} fs-5`}
        id="formTitleInput"
        placeholder="Task title"
        value={isTitle}
        onChange={handleTitleChange}
        required
      />
    </div>
  );
}
