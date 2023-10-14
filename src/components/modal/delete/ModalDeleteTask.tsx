import { getTaskById, getTasksFromBoards } from "utils/functions";
import { ModalDeleteButton } from "../buttons/ModalDeleteTaskButton";
import { IBoard } from "interfaces/ITasks";
import { ContentContainer } from "../containers/ContentContainer";
import { ModalHeader } from "../content/ModalHeader";
import { ModalBody } from "../content/ModalBody";
import { ModalFooter } from "../content/ModalFooter";

export function ModalDeleteTask({
  value,
  data,
  boards,
}: {
  value: string;
  data: string;
  boards: IBoard[];
}) {
  const tasks = getTasksFromBoards(boards);
  const { title, id } = getTaskById(data, tasks);

  if (value === "delete" && data) {
    return (
      <ContentContainer>
        <ModalHeader title={`Deleting Task "${title}"`} />
        <ModalBody title={title} />
        <ModalFooter>
          <ModalDeleteButton id={id} />
        </ModalFooter>
      </ContentContainer>
    );
  }
}
