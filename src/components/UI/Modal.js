import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDom from 'react-dom';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<Fragment>
			{/* HMTL 코드가 여러 군데 흩어져있지 않도록 포털 사용!
      <Backdrop />
			<ModalOverlay>{props.children}</ModalOverlay> */}
			{ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
			{ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</Fragment>
	);
};

export default Modal;
