import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import BookAppointment from './components/BookAppointment/BookAppointment';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import DashboardRoutes from './components/Dashboard/DashboardRoutes/DashboardRoutes';
import { Dashboard } from '@material-ui/icons';
export const UserContext = createContext();

function App() {

  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();

  return (
    <UserContext.Provider value={[selectedTime, setSelectedTime, selectedDate, setSelectedDate]}>
      <Router>
        <Switch>
          <div className="App">
            <h1>Time: {selectedTime}</h1>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/bookAppointment">
              <BookAppointment></BookAppointment>
            </Route>
            <Route path="/appointment-from">
              <AppointmentForm></AppointmentForm>
            </Route>
            <Route path="/dashboard">
             <DashboardRoutes></DashboardRoutes>
            </Route>
          </div>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
