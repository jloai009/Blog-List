import React from "react"
import Notification from "./Notification"

const Header = (props) => {

  return (
    <div>
      <h2>Blog-List</h2>
      <Notification {...props.notificationProps} />
      <div>
        <p>
          {props.user.name} logged in&nbsp;
          <button onClick={props.handleLogout}>Logout</button>
        </p>
      </div>
    </div>
  )
}

export default Header
