import React from "react";

import styles from './Button.module.css';

// import styled from 'styled-components';

// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     font-weight: bold;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;
//     border-radius: 5px;
//     background: linear-gradient(
//       144deg,
//       rgba(2, 0, 36, 1) 0%,
//       rgba(121, 9, 100, 1) 33%,
//       rgba(0, 212, 255, 1) 100%
//     );

//     @media (min-width: 768px) {
//       width: auto;
//     }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

// `; // button is a method in an object 'styled'







const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
