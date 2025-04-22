import React, { useState } from "react";
import { TASKS, CATEGORIES } from "../data";
import TaskList from "../components/TaskList";
import CategoryFilter from "../components/CategoryFilter";
import NewTaskForm from "../components/NewTaskForm";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h1>My tasks</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
