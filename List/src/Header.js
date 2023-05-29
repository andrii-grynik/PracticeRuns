import React from 'react'

const Header = ({title}) => {

  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}
//sets title if not provided in app.js
Header.defaultProps = {
  title: "Empty title"
}

export default Header