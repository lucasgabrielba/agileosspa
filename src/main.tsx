import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/global.css';
import ErrorBoundary from './components/common/ErrorBoundary';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ErrorBoundary>
)
