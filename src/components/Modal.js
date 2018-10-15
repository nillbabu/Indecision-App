import React from 'react'
import ReactModal from 'react-modal'


const Modal = (props) => <ReactModal
                            isOpen={props.selectedOption}
                            contentLabel="Seletected Option"
                            onRequestClose={props.closeModalhandler} 
                            closeTimeoutMS={500}
                            className='modal'
                            >
                            <h3 className='modal-title'>Seletected Option</h3>
                            {props.selectedOption && <p className='modal-body'>{props.selectedOption}</p>}
                            <button className='btn' onClick={props.closeModalhandler}>Okay</button>
                        </ReactModal>
export default Modal
// Modal.setAppElement(document.getElementById('root'))