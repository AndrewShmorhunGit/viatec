import { projectTasks } from "data/static";
import { Task } from "../task/Task";

export function Tasks() {
  return (
    <>
      {projectTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          completed={task.completed}
        />
      ))}
    </>
  );
}
