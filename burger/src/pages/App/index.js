import React from 'react';
import css from './style.module.css';


import Toolbar from "../../components/Toolbar";
import BurgerBuilder from '../BurgerBuilder';
import Burger from '../../components/Burger';

function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.Content}>
        <BurgerBuilder />
        <Burger />
      </main>

    </div>
  );
}

export default App;
