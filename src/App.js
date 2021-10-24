import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Teachers from './pages/Teachers'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Navbar/Topbar'
import Feedback from './pages/Feedback'
import GuestTeacher from './pages/GuestTeacher'
function App() {

  return <div className="App"><Topbar/>
		<div className="container">
        <Router>
		    <Navbar />
        <Switch>
          <Route path="/Home" exact component={() => <Home />} />
          <Route path="/Teachers" exact component={() => <Teachers />} />
          <Route path="/GuestTeacher" exact component={() => <GuestTeacher />} />
          <Route path="/Feedback" exact component={() => <Feedback/>} />

        </Switch>
      </Router>
      </div>
  
  </div>
;
}

export default App;
