import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	const cartCtx = useContext(CartContext);

	// reduce(param: 1. 함수, 2. 시작값) : 내장메소드; 데이터 배열을 값 하나로 변환
	// 1. 함수(현재값, 처리할 항목)
	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

	//사이드 이펙트 처리를 위한 useEffect
	useEffect(() => {
		if (cartCtx.items.length === 0) return;
		setBtnIsHighlighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 300);

		//클린업 함수
		return () => {
			clearTimeout(timer);
		};
	}, [cartCtx.items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
