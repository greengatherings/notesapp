import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
  		<h1 align="center"> Welcome to Green Gatherings. We coming soon </h1>
		<App />
	</StrictMode>,
)
