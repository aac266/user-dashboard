import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Teachers from './pages/Teachers'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Navbar/Topbar'
import Feedback from './pages/Feedback'
import GuestTeacher from './pages/GuestTeacher'
import Admin from './pages/Admin';
import Documents from './pages/Documents';
import Logout from './pages/Logout';
import LoginControl from './components/LoginControl';
import AdminFeedback from './pages/AdminFeedback';
import Users from './pages/Users';

function App() {

  return <div className="App"><Topbar/>
        <Router>
		    <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Admin" exact component={() => <Admin />} />
          <Route path="/Teachers" exact component={() => <Teachers />} />
          <Route path="/GuestTeacher" exact component={() => <GuestTeacher />} />
          <Route path="/Feedback" exact component={() => <Feedback/>} />
          <Route path="/Logout" exact component={() => <Logout/>} />
          <Route path="/Login" exact component={() => <LoginControl/>} />
          <Route path="/AdminFeedback" exact component={() => <AdminFeedback/>} />
          <Route path="/Users" exact component={() => <Users/>} />
          <Route path="/Documents" exact component={() => <Documents/>} />

          


        </Switch>
      </Router>
      </div>
  
;
}

export default App;
