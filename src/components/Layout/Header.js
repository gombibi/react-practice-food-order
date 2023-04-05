import React from 'react';
import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			{/* dash가 있는 css 요소는 .으로 가져올 수 없어서  [] 안에 넣어서 가져옴 */}
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='A table full of delicious food' />
			</div>
		</Fragment>
	);
};

export default Header;
