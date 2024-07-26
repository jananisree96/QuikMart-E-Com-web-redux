import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './routes';  //index.js
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
