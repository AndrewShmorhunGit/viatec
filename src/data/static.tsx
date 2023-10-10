import { ITask } from "interfaces/ITasks";

export const tasks: ITask[] = [
  {
    id: "1",
    title: "Project Kickoff Meeting",
    description:
      "Schedule and conduct a kickoff meeting with the project team.",
    completed: false,
  },
  {
    id: "2",
    title: "Create Project Plan",
    description:
      "Develop a detailed project plan outlining tasks, timelines, and resources.",
    completed: true,
  },
  {
    id: "3",
    title: "Gather Requirements",
    description: "Collect and document project requirements from stakeholders.",
    completed: false,
  },
  {
    id: "4",
    title: "Design Phase",
    description:
      "Initiate the design phase of the project, including wireframes and mockups.",
    completed: true,
  },
  {
    id: "5",
    title: "Development Sprint 1",
    description:
      "Start the first development sprint to build project features.",
    completed: false,
  },
  {
    id: "6",
    title: "User Testing",
    description:
      "Conduct user testing sessions to gather feedback on the project.",
    completed: true,
  },
  {
    id: "7",
    title: "Bug Fixes and Enhancements",
    description:
      "Address and fix reported bugs and make requested enhancements.",
    completed: false,
  },
  {
    id: "8",
    title: "Documentation",
    description:
      "Create project documentation, including user manuals and technical guides.",
    completed: true,
  },
  {
    id: "9",
    title: "Quality Assurance Testing",
    description:
      "Perform thorough QA testing to ensure the project meets quality standards.",
    completed: false,
  },
  {
    id: "10",
    title: "Project Closure",
    description:
      "Finalize the project, provide training, and conduct a project closure meeting.",
    completed: false,
  },
];

const toDoTasks = tasks.filter((task, index) => index < 3 && task);
const inProgressTasks = tasks.filter(
  (task, index) => index > 2 && index < 7 && task
);
const doneTasks = tasks.filter((task, index) => index > 6 && task);

export const boards = [toDoTasks, inProgressTasks, doneTasks];
