import React from "react"
import Notification from "./Notification"

const Header = (props) => {

  const notificationProps = { notification: props.notification, errorOcurred: props.errorOcurred }

  return (
    <div>
      <h2>Blog-List</h2>
      <Notification {...notificationProps} />
      <div>
        <p>
          {props.user.name} logged in
          <button onClick={props.handleLogout}>Logout</button>
        </p>
      </div>
    </div>
  )
}

export default Header
