import { readTasks, writeTasks } from "../utils/file.utils.js";

export const getallTask = (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }

  const tasks = readTasks();
  res.json(tasks.filter((task) => task.username === req.session.user.username));
};

export const createTask = (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }

  const { title, description } = req.body;
  const tasks = readTasks();

  const duplicate = tasks.find(
    (task) =>
      task.username === req.session.user.username && task.title === title
  );
  if (duplicate) {
    return res.status(400).json({ message: "Tasks exists already" });
  }

  const newTask = {
    id: Date.now(),
    username: req.session.user.username,
    title,
    description,
    completed: false,
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).send(newTask);
};
export const updateTask = () => {};
export const deleteTask = () => {};
