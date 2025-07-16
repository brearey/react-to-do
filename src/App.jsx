import './App.css'
import { TaskItem } from "./components/TaskItem";

function App() {

  return (
    <>
      <div className="bg">
          <div className="container-w">
              <h1>Todo app</h1>
              <div className="create-task-wrapper">
                  <input type="text" placeholder="Create task"/>
                  <button>Submit</button>
              </div>
              <div className="categories-wrapper">
                  <div className="category-button active">All</div>
                  <div className="category-button">Active</div>
                  <div className="category-button">Completed</div>
              </div>
              <div className="task-list">
                  <TaskItem checked={true} name="Create component of the task Create component of the task Create component of the task Create component of the taskCreate component of the task Create component of the task Create component of the task Create component of the task"/>
                  <TaskItem checked={false} name="Task 1"/>
                  <TaskItem checked={false} name="Task 1"/>
                  <TaskItem checked={false} name="Task 1"/>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
