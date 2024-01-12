import React from "react";
import "./taskList.css";
import TaskItem from"../taskItem/taskItem";

const TaskList = ({ tasks, onDelete }) => {  //Receives the props from toDoApp
  return (
    <div className="tasks-display">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} deleteATask={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;