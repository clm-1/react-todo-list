import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoContextProvider from './contexts/TodoContext';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import InfoBar from './components/InfoBar';

function App() {
  return (
    <div className="App">
      <Router>
        <TodoContextProvider>
          <Navbar />
          <InfoBar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </TodoContextProvider>
      </Router>
    </div>
  );
}

export default App;
