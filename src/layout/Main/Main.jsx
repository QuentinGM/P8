import React from 'react'
import "../Main/Main.scss"

function Main({children}) {
  return (
    <div className="main">{children}</div>
  )
}

export default Main