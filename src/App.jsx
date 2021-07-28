import './app.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/watch'>
          <Watch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
