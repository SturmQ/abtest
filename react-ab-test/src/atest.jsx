// src/atest.jsx
import { useFeatureFlagVariantKey, usePostHog } from '@posthog/react'
import './App.css'

function App() {
  const posthog = usePostHog()
  // posthog.featureFlags.overrideFeatureFlags({ flags: {'buttontest': 'test'} })
  const flagValue = useFeatureFlagVariantKey('abtest')

  const handleClick = () => {
    posthog.capture('button clicked')
  }

  return (
    <div className="App">
      <h1>Welcome to the A Page</h1>
        {flagValue === 'control' ? (
        <button onClick={handleClick}>Click if you like A</button>
      ) : (
        <h2>flag value is {flagValue}
        </h2>      
      )}      
    </div>
    
  )
}

export default App
