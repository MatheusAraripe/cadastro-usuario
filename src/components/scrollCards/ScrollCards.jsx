import React from 'react'
import './scrollCards.css'

function ScrollCards({children}) {
  return (
    <div className = "scrollContainer">
        {children}
    </div>
  )
}

export default ScrollCards