import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import App from './App';

import './index.css';
import {store} from "./reduxStore/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  
  <App />
  </Provider>
)
