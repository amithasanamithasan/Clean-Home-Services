import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Index.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';

// import AuthProviders from './Providers/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<AuthProviders>
<RouterProvider router={routes}/>
</AuthProviders>


</React.StrictMode>,
)
