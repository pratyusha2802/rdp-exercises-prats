import React from "react"
import CommitMessage from "./CommitMessage"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Commit Message App</h1>
      </header>
      <main>
        <CommitMessage />
      </main>
    </div>
  )
}

export default App
