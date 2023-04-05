import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
	const [cartIsShown, setCarIsShown] = useState(false);

	const showCartHandler = () => {
		setCarIsShown(true);
	};

	const hideCartHandler = () => {
		setCarIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			{/* 2depth 정도라 props 체이닝/드릴링 사용 -> 여러 수준의 props를 전달해야할 때는 context로 대체 추천*/}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
