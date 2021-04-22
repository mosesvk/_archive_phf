import React, {forwardRef} from "react";
import "./Modal.scss";

export function ModalPadding({ children = null, className = "", ...props }) {
  return (
    <div className={`modal-padding ${className}`} {...props}>
      {children}
    </div>
  );
}

export default forwardRef(Modal);

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
          {Boolean(content) && <div className="modal-structure">Looking to get 1 on 1 work? No problem. We can work on specific drills and skills that you feel that you could work on. We can do a personal assessment of specific areas that need to be worked on.</div>}
          {Boolean(footer) && (
            <footer className="modal-structure">{footer}</footer>
          )}
        </div>
      </div>
    </div>
  );
}