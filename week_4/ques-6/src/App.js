import React, { useState } from "react"
import "./App.css"
import CategoryButton from "./CategoryButton"
import CategoryContent from "./CategoryContent"

function App() {
  const [activeCategory, setActiveCategory] = useState("recent")

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  }

  return (
    <div className="container">
      <div className="nav">
        <CategoryButton
          label="Recent"
          active={activeCategory === "recent"}
          onClick={handleCategoryClick}
          category="recent"
        />
        <CategoryButton
          label="Popular"
          active={activeCategory === "popular"}
          onClick={handleCategoryClick}
          category="popular"
        />
        <CategoryButton
          label="Trending"
          active={activeCategory === "trending"}
          onClick={handleCategoryClick}
          category="trending"
        />
      </div>
      <div className="result">
        <CategoryContent category="recent" active={activeCategory}>
          <div>
            <h3>Does drinking coffee make you smarter?</h3>
            <p>5h ago • 5 comments • 2 shares</p>
          </div>
          <div>
            <h3>So you've bought coffee... now what?</h3>
            <p>2h ago • 3 comments • 2 shares</p>
          </div>
        </CategoryContent>
        <CategoryContent category="popular" active={activeCategory}>
          <div>
            <h3>Is tech making coffee better or worse?</h3>
            <p>Jan 7 • 29 comments • 16 shares</p>
          </div>
          <div>
            <h3>The most innovative things happening in coffee</h3>
            <p>Mar 19 • 24 comments • 12 shares</p>
          </div>
        </CategoryContent>
        <CategoryContent category="trending" active={activeCategory}>
          <div>
            <h3>Ask Me Anything: 10 answers to your questions about coffee?</h3>
            <p>2d ago • 9 comments • 5 shares</p>
          </div>
          <div>
            <h3>The worst advice we've ever heard about coffee</h3>
            <p>4d ago • comments • 2 shares</p>
          </div>
        </CategoryContent>
      </div>
    </div>
  )
}

export default App
