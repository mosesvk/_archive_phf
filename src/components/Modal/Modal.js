import React from "react";

import "./Modal.css";

export function ModalPadding({ children = null, className = "", ...props }) {
  return (
    <div className={`modal-padding ${className}`} {...props}>
      {children}
    </div>
  );
}

export default React.forwardRef(Modal);

function Modal(props, ref) {
  const {
    isOpen = false,
    hasOverlay = true,
    header = null,
    children: content = null,
    footer = null
  } = props;
  return (
    <div className={`modal-container ${isOpen ? "open" : "closed"}`}>
      {hasOverlay && <div className="modal-overlay" />}
      <div className="modal-box">
        <div className="modal" ref={ref}>
          {Boolean(header) && (
            <header className="modal-structure">{header}</header>
          )}
          {Boolean(content) && <div className="modal-structure">{content}</div>}
          {Boolean(footer) && (
            <footer className="modal-structure">{footer}</footer>
          )}
        </div>
      </div>
    </div>
  );
}