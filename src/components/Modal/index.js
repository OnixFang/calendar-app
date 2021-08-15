import './styles.css';
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
    <div ref={modalRef} className="modal modal-fixed-footer">
      {children}
    </div>
  );
};

export default Modal;
