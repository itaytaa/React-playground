
import './App.css';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import SpecialButton from './SpecialButton/SpecialButton';
import Counter from './Counter/Counter';
import Toggle from './Toggle/Toggle';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';


function App() {
  return (

    <div className="App">
      <Menu>
        <MenuItem route="/">Home</MenuItem>
        <MenuItem route="/contact">Contact</MenuItem>
        <MenuItem route="/portfolio">Portfolio</MenuItem>
        <MenuItem route="/products">products</MenuItem>
      </Menu>
      <hr />
      <SpecialButton />
      <hr />
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <RandomColorSquare/>
    </div>
  );
}

export default App;
