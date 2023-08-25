
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import FoodItem from "./FoodItem";
import Axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getData() {
      const snacksData = await SnackOrBoozeApi.getSnacks();
      const drinksData = await SnackOrBoozeApi.getDrinks();

      setSnacks(snacksData);
      setDrinks(drinksData);
      setIsLoading(false);
    }

    getData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  } 


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
  <Menu items={snacks} title="Snacks" />
</Route>
<Route exact path="/drinks">
  <Menu items={drinks} title="Drinks"/>
</Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <FoodItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;