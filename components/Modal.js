import React, { useState } from 'react';
import styled from 'styled-components';

const ModalStyles = styled.div`
  border-radius: 3px;
  border: none;
  padding: 0;
  width: 400px;
  max-width: max-content;
  height: min-content;
  position: absolute;
  top: 50%;
  left: 50%;  
  transform: translate(-50%, -50%);
  cursor: move;
  background-color: #fff;
  padding: 40px 20px 20px 20px;
  cursor: move;
  box-shadow: 3px 3px 8px -2px rgba(1, 15, 29, 0.6);

  .close-icon {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;

    svg {
      width: 24px;
      height: 24px;
      fill: orangered;
    }
  }

  .modal-header {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .modal-body {
    margin-bottom: 1.5rem;
    font-size: clamp(1.2rem, 2.5vw, 1.6rem); ;
  }

  .modal-footer {
    .modal-close {
      font-family: inherit;
      font-weight: 700;
      padding: 5px 15px;
      font-size: 1.4rem;
      cursor: pointer;
      background-color: orangered;
      outline: none;
      border: none;
      color: #f7f7f7;
    }
  }
`;

const Modal = ({ closeModal }) => {
  /**
   * Draggable logic
   */
  const [xCoords, setXCoords] = useState(0);
  const [yCoords, setYCoords] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [updatedStyles, setUpdatedStyles] = useState({});

  const handleDragStart = (evt) => {
    let diffX = evt.screenX - evt.currentTarget.getBoundingClientRect().left;
    let diffY = evt.screenY - evt.currentTarget.getBoundingClientRect().top;
    setXCoords(diffX);
    setYCoords(diffY);
    setIsDragging(true);
  };

  const handleDragMove = (evt) => {
    if (isDragging) {
      const leftPos = evt.screenX - xCoords;
      const topPos = evt.screenY - yCoords;

      setUpdatedStyles({
        left: leftPos,
        top: topPos,
        transform: 'unset',
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <ModalStyles
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        style={updatedStyles}
      >
        <div class="close-icon" onClick={closeModal}>
          <svg
            width="512px"
            height="512px"
            id="close-icon-btn"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
          </svg>
        </div>
        <header className="modal-header">Custom Modal Component</header>
        <main className="modal-body">
          Lucas ipsum dolor sit amet sidious maul hutt vader moff dantooine hutt
          chewbacca kenobi leia. Antilles darth luuke chewbacca. Hutt hutt
          qui-gon thrawn sebulba fett k-3po hutt jango. Boba antilles jade
          organa calrissian mon skywalker. Dooku han biggs ewok obi-wan. Bespin
          mara han twi'lek c-3po chewbacca. Fett solo kamino jade ben jango.
        </main>
        <footer className="modal-footer">
          <button className="modal-close" onClick={() => closeModal()}>
            Close
          </button>
        </footer>
      </ModalStyles>
    </>
  );
};

export default Modal;
