import React, { useState } from 'react';
import styled from 'styled-components';

const ModalStyles = styled.div`
  border-radius: 3px;
  border: none;
  padding: 0;
  max-width: 80vw;
  width: 400px;
  height: min-content;
  cursor: move;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease-in-out;
  cursor: move;
  background-color: #fff;
  padding: 20px;
  transition: all 0.3s cubic-bezier(0, 0.26, 0.56, 0.96);
  box-shadow: 3px 3px 8px -2px rgba(1, 15, 29, 0.6);

  @media (min-width: 768px) {
    max-width: 60vw;
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
  const [] = useState({})

  return (
    <>
      <ModalStyles>
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
