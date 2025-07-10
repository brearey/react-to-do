import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
          </div>
      </div>
    </>
  )
}

export default App
