import { Routes } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Recipes from './components/Recipes';

import Hardships from './components/recipes/Hardships';
import Death from './components/recipes/Death';
import Evil from './components/recipes/Evil';
import Worry from './components/recipes/Worry';

function App() {
  return (
    <>
      <Hardships />
      <Evil />
      <Worry />
      <Death />

      {/* <Header />

      <Recipes />

      <About />

      <Footer /> */}
    </>
  );
}

export default App;
