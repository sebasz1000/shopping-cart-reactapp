import './style.css'
import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { FiltersContextProvider, CartContextProvider } from './src/context/'

const root = createRoot(document.querySelector('#root'))
root.render(
  <FiltersContextProvider >
    <App />
  </FiltersContextProvider>
)
