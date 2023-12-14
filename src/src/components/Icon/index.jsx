import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

export default function Icon({icon = "", img = false, src = '', alt = ''}) {
  return (
    <>
      {
        img ? <img src={src} alt={alt} /> : <FontAwesomeIcon icon={icon} />
      } 
    </>
  )
}
