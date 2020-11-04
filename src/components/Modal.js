import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from "react-dom";
import styled from 'styled-components'
import { animated, useSpring } from "react-spring";
import { useLockBodyScroll } from '../utils/hooks'
const modalRoot = document.getElementById('modal-root');

const getAnimation = (on) => {
  return {
    opacity: on ? 1 : 0,
    transform: on ? `translateY(0)` : `translateY(-10%)`,
  };
};


export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return this.props.show ? ReactDOM.createPortal(
      this.props.children,
      this.el
    ) : null
  }
}

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);  
`


const StyledModalWrapper = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;  
  display: flex;
  justify-content: center;
  align-items: center;

  .modal__content {
    width: 50%;
    min-height: 25%;
    padding: 2.5rem 2rem;
    position: relative;
    z-index: 999;
    background-color: ${({theme}) => theme.mainBackgroundColor};
  }

  .modal__close {
    position: absolute;
    top: .5rem;
    right: .5rem;
    appearance: none;
    border: none;
    outline: none;
    padding: .5rem;
    line-height: 1rem;
    
    &:hover {
      cursor: pointer;
    }
  }
`

export const ModalWrapper =({show, setShow, children}) => {  
  const [on, setOn] = useState(false)
  const modalEl = useRef()
  useLockBodyScroll()
  useEffect(() => {
    setOn(true)
  }, [])

  return (
  <StyledModalWrapper className="modal__wrapper">
    <Overlay onClick={() => setShow(false)} />
    <animated.div 
      ref={modalEl} 
      style={useSpring(getAnimation(on))} 
      className="modal__content">      
        <button className="modal__close" onClick={() => setShow(false)} >Close</button>
        {children}              
    </animated.div>
  </StyledModalWrapper>
)}

