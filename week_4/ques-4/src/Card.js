import React from "react"
import "./Card.css"

const Card = ({ title, imgSrc, category, timeToRead }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{category}</p>
      <p>{timeToRead} min read</p>
    </div>
  )
}

export default Card
