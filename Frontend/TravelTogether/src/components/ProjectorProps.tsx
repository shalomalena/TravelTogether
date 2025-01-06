import React from "react";

interface ProjectorProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Projector: React.FC<ProjectorProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Projector;
