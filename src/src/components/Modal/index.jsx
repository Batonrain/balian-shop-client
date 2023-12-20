import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import modal from './modal.module.scss';
import ButtonGroup from '@components/ButtonGroup';

export default function Modal({ isOpen, onClose, onSuccess, children }) {
	const modalRoot = document.getElementById('modal-root');

    const buttons = [
        {
            content: "CANCEL",
            className: modal['modal__content-cancel'],
            onClick: onClose
        },
        {
            content: "YES",
            className: modal['modal__content-success'],
            onClick: onSuccess
        }
    ]

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isOpen]);

	return isOpen
		? ReactDOM.createPortal(
				<div className={modal.modal}>
					<div className={modal.modal__content}>
						{children}
						<ButtonGroup buttons={buttons} classGroups={modal.modal__content__groups} />
					</div>
				</div>,
				modalRoot
		  )
		: null;
}
