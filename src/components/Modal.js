const Modal = ({ show, onClose, title, children }) => {
    return (
      show && (
        <>
        {/* backdrop is overlay and it is above the modal, clicking outside should close the modal and for that we are using a trick here (though we can use eventlistner and hide) we will make one more parent div of size entire screen and clicking on that will trigger onclose */}
          <div className="modal-backdrop" onClick={onClose}></div>
          <div className={`modal-wrapper ${show ? "active" : ""}`}>
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              <span className="modal-close" onClick={onClose}>
                X
              </span>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </>
      )
    );
  };

  export default Modal;