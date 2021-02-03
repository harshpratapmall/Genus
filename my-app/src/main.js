import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login'
import Reg from './components/registration'
import Form from './components/form'
import Forgot from './components/forgotpassword'
import OTP from './components/otp'
import Preset from './components/passwordReset'
import DashboardS from './StudentPanel/Dashboard'
import DashboardT from './TeacherPanel/Dashboard'
import Dashboard from './AdminPanel/Dashboard'
import Homepage from './LandingPage/Homepage'
import AddTea from './AdminPanel/AddingTeacher'
import ClassScheduling from './AdminPanel/ClassScheduling'
import TeacherList from './AdminPanel/TeacherList'
import Rescheduling from './AdminPanel/Rescheduling'
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom"

function main() {
    return (
    <Router>
      <Switch>
        
      <Route path="/" exact component= {Homepage}></Route>
      <Route path="/signIn" component= {Login}></Route>
      <Route path="/forgotpassword" component= {Forgot}></Route>
      <Route path="/verification"  component= {OTP}></Route>
      <Route path="/signUp" component= {Reg}></Route>    
      <Route path="/form" component= {Form}></Route>
      <Route path="/reset" component= {Preset}></Route>
      <Route path="/AdminPanel" component= {Dashboard}></Route>
      <Route path="/TeacherPanel" component= {DashboardT}></Route>
      <Route path="/StudentPanel" component= {DashboardS}></Route>
      <Route path="/admin/AddingTeacher" component= {AddTea}></Route>
      <Route path="/Admin/ClassScheduling" component= {ClassScheduling}></Route>
      <Route path="/Admin/TeacherList" component= {TeacherList}></Route>
      <Route path="/Admin/Reschedule" component= {Rescheduling}></Route>
      
      <Redirect to="/"></Redirect>
      </Switch>
      
    </Router>

    )
  }


export default main