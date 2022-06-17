import React, { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';

const TogglerStyles = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    font-family: inherit;
    background-color: cornflowerblue;
    border: none;
    padding: 10px 15px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    border-radius: 2px;
  }
`;

const Toggler = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const showModal = () => {
    if (!isModalShown) {
      setIsModalShown(true);
    } else {
      setIsModalShown(false);
    }
  };

  const hideModal = () => {
    setIsModalShown(!isModalShown);
  };

  return (
    <>
      <TogglerStyles>
        <button onClick={showModal} className="toggle-modal">
          Show Modal
        </button>
      </TogglerStyles>
      {isModalShown && <Modal closeModal={hideModal} />}
    </>
  );
};

export default Toggler;
