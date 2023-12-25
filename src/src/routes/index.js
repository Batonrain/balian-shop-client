import App from '../App';
import Profile from '@pages/Profile';
import Product from '@/pages/Product';
import MainPage from '@/pages/MainPage';
import Basket from '@/pages/Basket';
import Order from '@/pages/Order';

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
			{
				path: '/basket',
				element: <Basket />,
			},
			{
				path: '/order',
				element: <Order />,
			},
		],
	},
];