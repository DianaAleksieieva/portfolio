import React from 'react';
import ReactDOM from 'react-dom';
import style from "./Modal.module.css"
import Content from "../ModalContent/Design/Content"

const Modal = ({ isShowing, hide, contentType }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className={style.modalOverlay}/>
    <div className={style.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button type="button" className={style.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <Content content={contentType}></Content>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;