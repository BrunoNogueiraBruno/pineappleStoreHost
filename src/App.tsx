import React from "react";
import ReactDOM from "react-dom";

import { colorTheme } from 'ui/globalStyles'
import Button from 'ui/Button'

import "./index.css";

const App = () => (
  <div className="container">
    <Button>Botão</Button>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
