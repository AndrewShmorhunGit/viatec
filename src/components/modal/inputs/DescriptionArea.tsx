import { ChangeEvent } from "react";

export function DescriptionArea({
  invalidDescription,
  isDescription,
  handleDescriptionChange,
}: {
  invalidDescription: boolean;
  isDescription: string;
  handleDescriptionChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      {invalidDescription ? (
        <label
          className="text-capitalize pb-2"
          htmlFor="formDescriptionInput"
          style={{ color: "orangered" }}
        >
          Description must be filled
        </label>
      ) : (
        <label htmlFor="formDescriptionInput" className="form-label">
          Description
        </label>
      )}
      <textarea
        className={`form-control ${invalidDescription && "is-invalid"} fs-5`}
        id="formDescriptionInput"
        placeholder="Task description" // is-invalid
        value={isDescription}
        onChange={handleDescriptionChange}
        style={{ height: "100px", fontSize: "1.2rem" }}
        required
      />
    </div>
  );
}
