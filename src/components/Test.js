import React from 'react'

export const Test = () => (
  <div>Hello Test</div>
)


export const Child = ({setShow, show}) => {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button onClick={() => setShow(!show)}>Click</button>
    </div>
  );
}