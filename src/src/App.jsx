import { useEffect } from 'react';
import { useTelegram } from '@hooks/useTelegram';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '@components/Footer';
import Header from '@components/Header';

import './App.scss';
import { CartProvider } from '@contexts/cart-context';

function App() {
	const { tg } = useTelegram();
	const location = useLocation();

	useEffect(() => {
		tg.ready();
	}, [tg]);

	return (
		<CartProvider>
			<div className="App">
				<Header />
				<Outlet />
				{
					location.pathname !== '/product' &&
						location.pathname !== '/basket' &&
						location.pathname !== '/profile' &&
						location.pathname !== '/order' ? (
						<Footer />
					) : (
						<></>
					)}
			</div>
		</CartProvider>
	);
}

export default App;
