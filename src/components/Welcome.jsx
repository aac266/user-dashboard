import React from 'react'
import Home from '../pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const boxStyle = {
  width: "500px",
  height: "200px",
  background:"rgb(211, 211, 211)",
  textAlign:"center",
  position:"absolute",
  color:"#262626",
  top: 250,
  left: 500,
  lineHeight:"190px",
  borderRadius:"10px"
}


export default function Welcome() {
  return (
    <div>

    </div>
  )
}

function clickMe(){
  <Route path="/Home" exact component={() => <Home />} />
}

Welcome = (props) => {
  return(
    <div>

    <h2 style={boxStyle}>Welcome {props.uName}</h2>
    </div>
  )
}