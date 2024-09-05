import React from 'react';
import './App.css';
// @ts-ignore
import {TextField} from '@material-ui/core';
import Form from "./Form";
import Products from "./Products";

function App() {

  return (
    <div className="App">
      <Form />
      <Products />
    </div>
  );
}

export default App;
