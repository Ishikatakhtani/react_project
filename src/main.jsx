
// import { createRoot } from 'react-dom/client'

// import "./style.css"

// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import store from './store.jsx';
// import { Provider } from 'react-redux';

// createRoot(document.getElementById('root')).render(
 
// <Provider store={store}>
// <App />
// </Provider>

    
  
// )


import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Add this
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter> {/* ✅ Wrap App in Router */}
      <App />
    </BrowserRouter>
  </Provider>
);
