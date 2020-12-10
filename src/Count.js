import React from 'react'

function Count({current, total}) {
  return (
    <div>
      <p className="count">{current} | {total}</p>
    </div>
  )
}

export default Count
