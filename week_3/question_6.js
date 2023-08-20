// Using Promises:

function makeRequest() {
  return fetch("https://whatthecommit.com/index.json")
    .then((response) => response.json())
    .then((data) => data.commit_message)
    .catch((error) => console.error("Error:", error))
}

const requests = []

for (let i = 0; i < 10; i++) {
  requests.push(makeRequest())
}

Promise.all(requests).then(() => alert("done!"))

// Using async/await:

async function makeRequest() {
  try {
    const response = await fetch("https://whatthecommit.com/index.json")
    const data = await response.json()
    return data.commit_message
  } catch (error) {
    console.error("Error:", error)
  }
}

;(async () => {
  const requests = []

  for (let i = 0; i < 10; i++) {
    requests.push(makeRequest())
  }

  await Promise.all(requests)
  alert("done!")
})()
