import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { CollateralDataProvider } from './context/CollateralDataProvider.tsx'
import { SearchDataProvider } from './context/SearchDataProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename="/">
      <CollateralDataProvider>
        <SearchDataProvider>
          <App />
        </SearchDataProvider>
      </CollateralDataProvider>
    </HashRouter>
  </StrictMode>
)
