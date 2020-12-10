import React from 'react'

function Text({disp}) {
  return (
    <div>
      <h1>{disp?.quote}</h1>
      <h3>-{disp?.author}</h3>
    </div>
  )
}

export default Text
