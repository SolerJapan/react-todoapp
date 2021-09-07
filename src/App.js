import React, { useState } from 'react'
import './App.css';
import TodoList from './components/TodoList';
import Home from './components/Home';
import List from './components/List';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useHistory,
} from "react-router-dom"

const padding = {
  padding: 5
}



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Create React',
      completed: true,

    },
    {
      id: 2,
      text: 'Execute Javascript',
      completed: false,

    },
    {
      id: 3,
      text: 'Execute Typescript',
      completed: true,
    }

  ])


  return (
    <div className="App">
      <h1>To Do App</h1>
      <Router>
        <div>
          <Link style={padding} to="/">home</Link>
          <Link style={padding} to="/list">todos</Link>
          <Link style={padding} to="/todoList">add todo</Link>
        </div>

        <Switch>
          <Route path="/todoList">
            <TodoList todos={todos} setTodos={setTodos} />
          </Route>
          <Route path="/list">
            <List todos={todos} />

          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
