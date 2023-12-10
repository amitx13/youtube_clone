import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
/*infinite loading concept - jab v page ka end pahuche tbb lazyLoading se fetch kro nextPageToken ko aur usko v render krdo */