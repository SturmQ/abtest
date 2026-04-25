// src/App.jsx
import { useFeatureFlagVariantKey, usePostHog } from '@posthog/react'
import './App.css'

function App() {
  const posthog = usePostHog()
  // posthog.featureFlags.overrideFeatureFlags({ flags: {'abtest': 'test'} })
  const flagValue = useFeatureFlagVariantKey('abtest2')

  const refreshClick = () => {

    if (flagValue == 'test')
    {
      posthog.featureFlags.overrideFeatureFlags({ flags: {'abtest2': 'control'} })
    }
    else
    {
      posthog.featureFlags.overrideFeatureFlags({ flags: {'abtest2': 'test'} })
    }
    window.location.reload()
    
  }

  const handleClick = () => {
    posthog.capture('button clicked')
  }

  if (flagValue == null)
  {
    posthog.featureFlags.overrideFeatureFlags({ flags: {'abtest2': 'control'} })
  }

  return (
    <div className="App">
      <h1>Welcome to the A/B test</h1>
      <h2>Your flag value is {posthog.getFeatureFlag('abtest2')}</h2>
      <button onClick={refreshClick}>Click to change</button>
        {flagValue === 'test' ? (
        <a href="/bpage.html">
        <button onClick={handleClick}>Click for B</button>
      </a>
      ) : (
        <a href="/apage.html">
        <button onClick={handleClick}>Click for A</button>
      </a>
      )}      
    </div>
    
  )
}

export default App