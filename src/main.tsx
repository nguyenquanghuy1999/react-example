// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.js'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { store } from './store/index.js';
import { Provider as StoreProvider } from 'react-redux';
import CounterProvider from './contexts/CounterContext.js';
import FormModalProvider from './contexts/FormModalContext.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <CounterProvider>
          <FormModalProvider>
            <App />
          </FormModalProvider>
        </CounterProvider>
      </StoreProvider>
    </QueryClientProvider >
  </>,
)



