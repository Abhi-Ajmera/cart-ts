import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Pages
import Store from './pages/Store.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Layout from './Layout.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/store',
				element: <Store />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
