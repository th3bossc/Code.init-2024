import React from 'react';
import {easeInOut, motion} from 'framer-motion';


const pathVariants= {
    hidden : {
        opacity : 0 , 
        pathLength : 0
    },
    
    visible : {
        opacity : 1 , 
        pathLength : 1, 
        transition : {
            duration : 1.5,
            delay : 0.5,
            ease : "easeOut"
        }
    }
}


const Scribble = () => {



    return (
        <svg 
        className="scribble"
        width="934" height="548"
        viewBox="0 0 934 548" 
        
        fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path 
    variants={pathVariants}
    initial = "hidden"
    whileInView = "visible" 
    viewport={{once:true}}
    d="M50 143.004C62.4125 134.411 81.2009 129.557 94.9474 123.923C141.388 104.888 185.597 84.1101 230.426 61.6959C232.423 60.6975 262.446 45.3502 263.5 51.4132C264.733 58.5014 262.219 68.9371 260.744 75.371C253.205 108.259 239.824 139.876 224.277 169.718C197.524 221.072 159.596 265.011 130.99 315.161C128.947 318.744 121.237 330.33 121.237 335.939C121.237 345.123 138.253 328.862 146.149 324.172C235.903 270.864 334.625 234.335 430.357 193.464C446.357 186.633 462.729 177.787 479.227 171.944C487.933 168.861 476.341 187.486 476.153 187.846C454.914 228.357 427.32 262.507 396.753 296.292C382.578 311.958 368.102 327.561 356.151 345.056C350.41 353.461 348.302 358.05 360.18 354.172C415.031 336.268 464.356 305.217 520.04 288.659C544.325 281.439 570.659 274.388 596.154 273.182C615.239 272.28 616.811 281.414 617.462 298.2C619.155 341.89 607.082 378.509 586.613 416.823C575.816 437.033 563.846 456.536 552.267 476.294C552.202 476.404 540.297 493.282 543.15 496.011C545.79 498.537 556.999 497.784 558.733 497.813C603.125 498.579 646.872 490.58 690.183 481.594C755.074 468.131 818.833 449.445 883.86 436.859" stroke="url(#paint0_linear_31_70)" strokeWidth="100" strokeLinecap="round"/>
<defs>
<linearGradient id="paint0_linear_31_70" x1="466.93" y1="50" x2="466.93" y2="497.896" gradientUnits="userSpaceOnUse">
<stop stopColor="#EB00FF"/>
<stop offset="1" stopColor="#00FFD1"/>
</linearGradient>
</defs>


</svg>

    );
};

export default Scribble;