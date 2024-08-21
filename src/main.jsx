import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Index.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
// import AuthProviders from './Providers/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<AuthProviders>
<QueryClientProvider client={queryClient}>
<RouterProvider router={routes}/>
  </QueryClientProvider>

</AuthProviders>


</React.StrictMode>,
)
