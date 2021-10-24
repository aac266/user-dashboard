import React from 'react'
import Home from '../pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const boxStyle = {
  width: "500px",
  height: "200px",
  background:"rgb(245,245,245)",
  textAlign:"center",
  position:"absolute",
  color:"#262626",
  top: 0,
  left: 0,
  lineHeight:"190px",
  borderRadius:"10px"
}


export default function Welcome() {
  return (
    <div>
          <button onclick={clickMe}>Go To Dashboard</button>

    </div>
  )
}

function clickMe(){
  <Route path="/Home" exact component={() => <Home />} />
}

Welcome = (props) => {
  return(
    <h2 style={boxStyle}>WELCOME {props.uName}</h2>

  )
}