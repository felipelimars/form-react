import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import App from './App'
import UseFormContext  from './hooks/useFormContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UseFormContext>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </UseFormContext>
)
