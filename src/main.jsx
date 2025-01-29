import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
  		<p align="center" align="center" style="color=blue;" > Welcome to Green Gatherings. We coming soon </p>
		<App />
	</StrictMode>,
)
