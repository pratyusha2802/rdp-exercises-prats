import React from "react"

const CategoryButton = ({ label, active, onClick, category }) => {
  return (
    <button
      className={`category-button ${active ? "active" : ""}`}
      onClick={() => onClick(category)}
      data-category={category}
    >
      {label}
    </button>
  )
}

export default CategoryButton
