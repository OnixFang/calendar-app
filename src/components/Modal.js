import './Modal.css';
import { useEffect, useRef } from 'react';
import M from 'materialize-css';

const Modal = ({ modalIsOpen, closeModal, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    M.Modal.init(modalRef.current, { dismissible: false });
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      M.Modal.getInstance(modalRef.current).open();
    } else {
      M.Modal.getInstance(modalRef.current).close();
    }
  }, [modalIsOpen]);

  return (
    <div ref={modalRef} className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        {children}
      </div>
      <div className="modal-footer">
        <button onClick={closeModal} className="waves-effect btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
