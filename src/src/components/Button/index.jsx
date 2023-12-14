import React from 'react'
import btn from './baseBtn.module.scss'

export default function Button({
    content = '', 
    className = '', 
    onClick = () => {}, 
    type = "button", 
    disabled = false}) 
    
    {
    let baseClass = btn.btn + " " + className

    return (
    <>
        <button
            className={baseClass}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    </>
  )
}
