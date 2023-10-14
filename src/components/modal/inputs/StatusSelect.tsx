import { TaskStatusEnum } from "interfaces/ITasks";
import { ChangeEvent } from "react";

export function StatusSelect({
  isStatus,
  handleStatusChange,
}: {
  isStatus: string;
  handleStatusChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="py-4">
      <label htmlFor="formStatusSelect" className="form-label">
        Status
      </label>
      <select
        id="formStatusSelect"
        className="form-select fs-5"
        value={isStatus}
        onChange={handleStatusChange}
      >
        <option value={TaskStatusEnum.TO_DO}>To Do</option>
        <option value={TaskStatusEnum.IN_PROGRESS}>In Progress</option>
        <option value={TaskStatusEnum.DONE}>Done</option>
      </select>
    </div>
  );
}
