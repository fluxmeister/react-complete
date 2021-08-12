import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.Backdrop} />
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const Modal = props => {
    /* If we used Portals, it would go like this: */
    // return <Fragment>
    //     <Backdrop />
    //     <ModalOverlay>{props.children}</ModalOverlay>
    // </Fragment>

    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
        {}
    </Fragment>
};

export default Modal;