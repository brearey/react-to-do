import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg">
          <div className="container">
              <h1>Todo app</h1>
              <div className="create-task">
                  <input type="text" placeholder="Create task"/>
                  <button>Submit</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
