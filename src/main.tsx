import { Provider } from './components/ui/provider.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Provider } from "@/components/ui/provider"
import App from './App.tsx'
import './index.css'
import { ChakraProvider,defaultSystem } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
    <App />
    </Provider>
  </StrictMode>,
)
