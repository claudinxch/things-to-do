import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./taskItem.css";

const TaskItem = ({ task, deleteATask }) => {   //Receives the props from taskList
    const [status, setStatus] = useState(false);
    
    const deleteTask = () => {  //Deletes the task receiving the deleteATask from taskList
      deleteATask(task); 
    }
  
    return ( 
      <div className="task-container">
        <div className={`task ${status ? 'done' : ''}`}>
          <input
            type="checkbox"
            name="progress"
            onChange={() => setStatus(!status)}
            checked={status}
            className="progress"
          />
  
          <p className="task-name">{task.taskName}</p>
  
          <p className="task-prio">
            Priority:{" "}
            <a
              className={`${
                task.taskPriority === "high"
                  ? "high"
                  : task.taskPriority === "medium"
                  ? "medium"
                  : task.taskPriority === "low"
                  ? "low"
                  : ""
              }`}
            >
              {task.taskPriority}
            </a>
          </p>
        </div>
  
        <div className="task-actions">
          <a className="delete-button" onClick={deleteTask}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </a>
        </div>
      </div>
    );
};

export default TaskItem;