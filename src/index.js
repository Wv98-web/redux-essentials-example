import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { worker } from './api/server';
import { fetchUsers } from './features/users/usersSlice';

async function start() {
  const container = document.getElementById('root');
  const root = createRoot(container);

  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' });

  store.dispatch(fetchUsers());

  root.render(
    /**
     * 开发模式下，生命周期、hook调用两次
     * <React.StrictMode> 严格模式检查仅在开发模式下运行；它们不会影响生产构建
     * 不用严格模式就好
     */
    // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    // </React.StrictMode>
  );
}

start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();