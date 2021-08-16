import './styles.css';

const Modal = ({ children }) => {
  return (
    <div className="custom-modal">
      <div className="row top-margin">
        <div className="col s12 m8 offset-m2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
