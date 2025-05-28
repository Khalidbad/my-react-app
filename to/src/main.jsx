import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Listodos from './todos/listodos'
import { Routes, Route } from 'react-router-dom'
import Editform from './component/Editform'
import Deleteform from './component/Deleteform'
import Showform from './component/Showform'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Create the QueryClient instance here
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listodos />} />
          <Route path="/edit/:id" element={<Editform />} />
          <Route path="/delete/:id" element={<Deleteform />} />
          <Route path="/show/:id" element={<Showform />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>    
)