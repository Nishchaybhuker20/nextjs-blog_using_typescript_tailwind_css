import React from "react";

export const Window = ({ className }) => (
    <svg
        className={className}
        xlmns = 'http://www.w3.org/2000/svg'
        width = '1em'
        height = '1em'
        viewBox = '0 0 24 24'
    >
        <path
            fill = 'none'
            stroke= 'currentColor'
            strokeLinecap = 'round'
            strokeLinejoin = 'round'
            strokeWidth = '1.5'
            d = 'M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.  .5v16.5H3.75z'
        ></path>    
    </svg>

);