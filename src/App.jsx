import './App.css'
import { useState } from "react";
import { Filter } from './components/Filter';
import { Navbar } from './components/Navbar';
import { ResultInfoBar } from './components/ResultInfoBar';
import { ResultTable } from './components/ResultTable';
import { Cart } from './components/Cart';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <SearchProvider>
      <Navbar setShowCart={setShowCart} />
      <div className={`content-ResultandFilter ${ showCart ? "three-columns" : "" }`}>
        <ResultInfoBar />
        <Filter />
        <ResultTable showCart={showCart} />
        { showCart && <Cart /> }
      </div>
    </SearchProvider>
  );
}

export default App
