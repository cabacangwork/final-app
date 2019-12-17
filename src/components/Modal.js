import React from 'react';
import ReactDOM from 'react-dom';

const ModalInfo = (props) => {
    return ( 
        <div className='modal-container'> 
            <div className="modal-details">
                <h3>{props.msg}</h3>
                <button className='btn btn-primary' onClick={props.closeModal}>Okay</button>
            </div>
        </div>
     );
}

const Modal = (props) => (
    ReactDOM.createPortal(
        ModalInfo(props),
        document.body
    )
);

export default Modal;