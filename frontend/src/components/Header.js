import React from "react"

const Header = (props) => (
  <div>
    <h2>Blog-List</h2>
    <div>
      <p>{props.user.name} logged in <button onClick={props.handleLogout}>Logout</button></p>
    </div>
  </div>
)

export default Header
