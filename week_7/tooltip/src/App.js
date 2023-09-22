import React from "react"
import Tooltip from "./components/Tooltip" // Import the Tooltip component

function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>
  )
}

export default App
