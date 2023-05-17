import './style.css'
import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { FiltersContextProvider } from './src/context/FiltersContextProvider'

const root = createRoot(document.querySelector('#root'))
root.render(
  <FiltersContextProvider >
    <App />
  </FiltersContextProvider>
)
