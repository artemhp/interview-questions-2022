import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import AddQuestion from './components/AddQuestion/AddQuestion';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <List />
      <AddQuestion />
      <Footer />
    </div>
  );
}

export default App;
