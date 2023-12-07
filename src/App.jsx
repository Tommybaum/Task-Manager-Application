import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button>Add Task</button>
      </div>
    </>
  )
}

export default App
