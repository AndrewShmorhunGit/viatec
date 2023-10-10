import { TasksContainer } from "components/containers/TasksContsiner";
import { Task } from "../task/Task";
import { ITask } from "interfaces/ITasks";

export function Tasks({ tasks }: { tasks: ITask[] }) {
  return (
    <TasksContainer>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          completed={task.completed}
        />
      ))}
    </TasksContainer>
  );
}
