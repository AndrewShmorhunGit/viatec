"use client";
import { ITaskForm, TaskStatusEnum } from "interfaces/ITasks";

export function ModalEditForm({
  invalidTitle,
  invalidDescription,
  isTitle,
  isDescription,
  isStatus,
  handleTitleChange,
  handleDescriptionChange,
  handleStatusChange,
}: ITaskForm) {
  return (
    <div
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
          value={isStatus}
          onChange={handleStatusChange}
        >
          <option value={TaskStatusEnum.TO_DO}>To Do</option>
          <option value={TaskStatusEnum.IN_PROGRESS}>In Progress</option>
          <option value={TaskStatusEnum.DONE}>Done</option>
        </select>
      </div>
    </div>
  );
}
