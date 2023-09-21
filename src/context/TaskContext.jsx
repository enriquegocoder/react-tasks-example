import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

// Este almacena los datos
export const TaskContext = createContext();

// Este es el componente que engloba al resto de componentes
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  // function createTask(task) {
  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]); // agrega al arreglo una nueva task a tasks
  };

  // function delete task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTasks(data); // carga el arrglo.
  }, []); // [] proceso de inicializacion

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

//export default TaskContext;
