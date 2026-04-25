// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import posthog from 'posthog-js'
import { PostHogProvider } from '@posthog/react'

posthog.init(
  'phc_wSsNSGJCja5Qq4SWHHw576Lykwv8RwQoVp4WYeWxDW3V', 
  {
    api_host: 'https://us.i.posthog.com',
    defaults: '2026'
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
)
