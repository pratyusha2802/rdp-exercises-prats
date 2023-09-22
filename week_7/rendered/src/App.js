import React, { Component } from "react"

function withLogging(WrappedComponent) {
  return class WithLogging extends Component {
    componentDidMount() {
      console.log(`${WrappedComponent.name} is rendered`)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

class Button extends Component {
  render() {
    return <button>Click me</button>
  }
}

const ButtonWithLogging = withLogging(Button)

function App() {
  return (
    <div>
      <ButtonWithLogging />
    </div>
  )
}

export default App
