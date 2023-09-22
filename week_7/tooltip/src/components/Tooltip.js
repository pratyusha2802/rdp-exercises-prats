import React, { useState, useRef } from "react"

function Tooltip({ text, children }) {
  const [isTooltipVisible, setTooltipVisible] = useState(false)
  const tooltipRef = useRef(null)

  const handleMouseEnter = (e) => {
    const targetRect = e.target.getBoundingClientRect()
    const tooltipX = targetRect.left + window.scrollX
    const tooltipY = targetRect.top + window.scrollY - 10 // Adjust for tooltip positioning

    setTooltipVisible(true)

    setTimeout(() => {
      if (tooltipRef.current) {
        tooltipRef.current.style.left = `${tooltipX}px`
        tooltipRef.current.style.top = `${tooltipY}px`
      }
    }, 0)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isTooltipVisible && (
        <div className="tooltip" ref={tooltipRef}>
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip
