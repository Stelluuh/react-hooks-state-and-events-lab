import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  //1. apply useState hook to create a state variable:
  const [isDarkMode, setIsDarkMode] = useState(false)

  //2. use the state variable to determine if our app should be in dark or light mode: We want to create a function that adds a toggle feature
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

