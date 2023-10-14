import { ITaskForm } from "interfaces/ITasks";
import { TitleInput } from "../inputs/TitleInput";
import { DescriptionArea } from "../inputs/DescriptionArea";
import { StatusSelect } from "./StatusSelect";
import { InputsWrapper } from "../inputs/InputsWrapper";

export function ModalInputs({
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
    <InputsWrapper>
      <TitleInput
        invalidTitle={invalidTitle}
        isTitle={isTitle}
        handleTitleChange={handleTitleChange}
      />
      <DescriptionArea
        invalidDescription={invalidDescription}
        isDescription={isDescription}
        handleDescriptionChange={handleDescriptionChange}
      />
      <StatusSelect
        isStatus={isStatus}
        handleStatusChange={handleStatusChange}
      />
    </InputsWrapper>
  );
}
