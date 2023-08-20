import React from "react"
import Button from "./button"

function SignUp() {
  return (
    <div className="signup">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <Button>Sign Up</Button>
    </div>
  )
}

export default SignUp
