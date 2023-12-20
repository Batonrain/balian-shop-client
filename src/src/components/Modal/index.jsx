import React, { useState, useEffect, createElement } from 'react';
import ReactDOM from 'react-dom';
import modal from './modal.module.scss';
import Button from '@components/Button';

export default function Modal({ isOpen, onClose, onSuccess, children }) {
	const modalRoot = document.getElementById('modal-root');
	const modalElement = document.createElement('div');

	useEffect(() => {
		modalRoot.append(modalElement);

		return () => {
			modalRoot.remove(modalElement);
		};
	}, [modalElement, modalRoot]);

	return isOpen
		? ReactDOM.createPortal(
				<div className={modal.modal}>
					<div className="modal-content">
						{children}
						<Button onClick={onClose} content="CANCEL" />
						<Button onClick={onSuccess} content="YES" />
					</div>
				</div>,
				modalElement
		  )
		: null;
}
