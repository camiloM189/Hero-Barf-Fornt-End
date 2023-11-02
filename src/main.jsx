import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { HomePage } from './pages/HomePage.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={store}>
          <HomePage />
        </Provider>
  </React.StrictMode>,
)
