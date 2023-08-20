import React from "react"
import Card from "./Card"
import "./App.css"

const cardData = [
  {
    title: "Article 1",
    imgSrc: "image1.jpg",
    category: "Technology",
    timeToRead: 5,
  },
  {
    title: "Article 2",
    imgSrc: "image2.jpg",
    category: "Science",
    timeToRead: 8,
  },
  {
    title: "Article 3",
    imgSrc: "image3.jpg",
    category: "Biology",
    timeToRead: 10,
  },
  {
    title: "Article 4",
    imgSrc: "image4.jpg",
    category: "Mathematics",
    timeToRead: 2,
  },
  {
    title: "Article 5",
    imgSrc: "image5.jpg",
    category: "English",
    timeToRead: 5,
  },
  {
    title: "Article 6",
    imgSrc: "image6.jpg",
    category: "Hindi",
    timeToRead: 7,
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Card Collection</h1>
      </header>
      <main className="card-collection">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imgSrc={card.imgSrc}
            category={card.category}
            timeToRead={card.timeToRead}
          />
        ))}
      </main>
    </div>
  )
}

export default App
