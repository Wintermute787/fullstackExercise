import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './Navbar';
import ExerciseList from './ExerciseList';
import EditExercise from './EditExercise';
import CreateExercise from './CreateExercise';
import CreateUser from './CreateUser';

function App() {
  return (
      <Router>
        <div className='container'>
          <Navbar/>
          <br/>
          <Route path ="/" exact component={ExerciseList}/>
          <Route path='/edit/:id' component={EditExercise}/>
          <Route path='/create' component={CreateExercise}/>
          <Route path='/user' component={CreateUser}/>
        </div>
      </Router>
  );
}

export default App;
