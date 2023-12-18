import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import './i18n';
import { router } from './routes/index';

const rt = createBrowserRouter(router);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		 <RouterProvider router={rt} />
	</React.StrictMode>
);
