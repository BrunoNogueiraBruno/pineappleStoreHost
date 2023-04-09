import React from "react"
import ReactDOM from "react-dom"

import Button from 'ui/Button'

import "./index.css"

const App = () => (
  <div className="container">
    App

    <Button>Teste botão</Button>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))
