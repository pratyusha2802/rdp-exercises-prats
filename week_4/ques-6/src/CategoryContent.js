import React from "react"

const CategoryContent = ({ category, active, children }) => {
  return (
    <div className={`category ${active !== category ? "hide" : ""}`}>
      {children}
    </div>
  )
}

export default CategoryContent
