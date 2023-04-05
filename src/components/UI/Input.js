import React from 'react';

import classes from './Input.module.css';

//ref 전달하기 위해 forwardRef 사용
const Input = React.forwardRef((props, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			{/* 요소에 전개연산자 사용: 자동으로 인풋 요소에 추가됨. id도 따로 안빼도 됨  ex) id={props.input.id} -> {id:'id'} */}
			<input ref={ref} {...props.input} />
		</div>
	);
});

export default Input;
