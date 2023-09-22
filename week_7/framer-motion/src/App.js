import React from "react"
import { motion } from "framer-motion"

function withFadeIn(WrappedComponent) {
  return function FadeIn(props) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WrappedComponent {...props} />
      </motion.div>
    )
  }
}

function MyComponent() {
  return <div>This component will fade in.</div>
}

const MyComponentWithFadeIn = withFadeIn(MyComponent)

function App() {
  return (
    <div>
      <MyComponentWithFadeIn />
    </div>
  )
}

export default App
