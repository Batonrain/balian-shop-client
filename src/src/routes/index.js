import App from '../App';
import Profile from '@pages/Profile';
import Product from '@/pages/Product';
import MainPage from '@/pages/MainPage';

export const router = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/product',
				element: <Product />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
		],
	},
];
