import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import TaskList from "../taskList/taskList";

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState("");

  const addTask = useCallback(() => {     //Function to add a task, which is an object that contains the task name and the task priority.
    if (newTask !== "" && priority !== "") {
      setTasks([
        ...tasks,
        {
          taskName: newTask,
          taskPriority: priority
        },
      ]);
      setNewTask("");
      setPriority("");
      setError("");
    } else {
      setError("Missing data!");
    }
  }, [tasks, newTask, priority]);

  const deleteTask = useCallback((index) => {   //Function to delete a task
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }, [tasks]);

  useEffect(() => {   //Loads the stored tasks saved in the localStorage
    const tasksStoraged = localStorage.getItem('data')
    
    if(tasksStoraged){
      setTasks(JSON.parse(tasksStoraged))
    }
  }, [])

  useEffect(() => {    //Saves the tasks in the localStorage
    if(tasks?.length){
      localStorage.setItem('data', JSON.stringify(tasks));
    }
  }, [tasks])

  const handleChange = (event) => setPriority(event.target.value); //Handles the input for the new task

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="task-inputs">
        <input
          type="text"
          name="task"
          id="newtask"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          placeholder="Write your task here"
        />
        <div className="radios">
          <h4>Priority</h4>
          <label
            htmlFor="highPrio"
            className={`radio-label ${priority === "high" ? "selected" : ""}`}
          >
            High{" "}
            <input
              type="radio"
              id="highPrio"
              value="high"
              checked={priority === "high"}
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="mediumPrio"
            className={`radio-label ${priority === "medium" ? "selected" : ""}`}
          >
            Medium{" "}
            <input
              type="radio"
              id="mediumPrio"
              value="medium"
              checked={priority === "medium"}
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="lowPrio"
            className={`radio-label ${priority === "low" ? "selected" : ""}`}
          >
            Low{" "}
            <input
              type="radio"
              id="lowPrio"
              value="low"
              checked={priority === "low"}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className="submit-button" onClick={addTask}>
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </button>
      </div>
      {error && <p className="error">{error}</p>}

      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default ToDoApp;
