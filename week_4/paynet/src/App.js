import "./App.css"
import NavBar from "./components/navbar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <hr />
      <header className="App-header">
        <h1>Sending money abroad has never been cheaper.</h1>
        <p>
          Send money with no limits to over 140 countries. Enjoy the live
          exchange rate with our flat $2 fee and a slick app that's made for
          you.
        </p>
        <button>Try it</button>
      </header>
      <div className="images">
        <img src="./images/1.jpg" alt="" />
        <img src="./images/2.jpg" alt="" />
        <img src="./images/3.jpg" alt="" />
        <img src="./images/4.jpg" alt="" />
        <img src="./images/5.jpg" alt="" />
      </div>
    </div>
  )
}

export default App
