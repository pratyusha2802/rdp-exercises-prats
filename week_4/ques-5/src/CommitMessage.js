import React, { useState, useEffect } from "react"

const CommitMessage = () => {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("https://whatthecommit.com/index.json")
      .then((response) => response.json())
      .then((data) => setMessage(data.commit_message))
      .catch((error) => console.error("Error fetching commit message:", error))
  }, [])

  return (
    <div>
      <h2>Random Commit Message</h2>
      <p>{message}</p>
    </div>
  )
}

export default CommitMessage
