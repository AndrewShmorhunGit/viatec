"use client";
import { ITask, TaskStatusEnum } from "interfaces/ITasks";
import { useState } from "react";

export function ModalEditForm({ task }: { task: ITask }) {
  const [isTitle, setTitle] = useState(task.title);
  const [isDescription, setDescription] = useState(task.description);
  const [isStatus, setStatus] = useState<TaskStatusEnum>(TaskStatusEnum.TO_DO);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = event.target;
    setDescription(`${target.value}`);
  };
  //Property 'target' does not exist on type 'ChangeEventHandler<HTMLTextAreaElement>'.ts(2339)

  const invalidDescription = isDescription.length === 0;
  const invalidTitle = isTitle.length === 0;

  return (
    <form
      className="form-floating"
      style={{
        maxWidth: "48rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        fontSize: "1.4em",
        paddingBottom: "4rem",
      }}
    >
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
          className={`form-control ${invalidTitle && "is-invalid"}`}
          id="formTitleInput"
          placeholder="Task title"
          value={isTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        {invalidDescription ? (
          <label
            htmlFor="formDescriptionInput"
            style={{ color: "orangered", textTransform: "capitalize" }}
          >
            Description must be filled
          </label>
        ) : (
          <label htmlFor="formDescriptionInput" className="form-label">
            Description
          </label>
        )}
        <textarea
          className={`form-control ${invalidDescription && "is-invalid"}`}
          id="formDescriptionInput"
          placeholder="Task description" // is-invalid
          value={isDescription}
          onChange={handleDescriptionChange}
          style={{ height: "100px" }}
        />
      </div>
      <div>
        <label htmlFor="formStatusSelect" className="form-label">
          Status
        </label>
        <select
          className="form-select"
          aria-label="Disabled select example"
          disabled
        >
          <option value="1">{TaskStatusEnum.TO_DO}</option>
          <option value="2">{TaskStatusEnum.IN_PROGRESS}</option>
          <option value="3">{TaskStatusEnum.DONE}</option>
        </select>
      </div>
    </form>
  );
}
