import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/App.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import Users from "./components/users";
import Stores from "./components/stores";

function App() {
    return (
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stores">Stores</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

   
        <Switch>
          <Route path="/stores">
            <Stores />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Container>
            <Home />
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;

function Home() {
    return <h2>Home</h2>;
  }
