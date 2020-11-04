import React, {useEffect, useState, useRef} from 'react'

export const Tooltip = ({children, title, id = "tt-1234"}) => {
  const [showToolTip, setShowToolTip] = useState(false)
  const childEl = useRef()
  const toolTipEl = document.createElement('div')
  toolTipEl.classList.add('tool-tip')
  toolTipEl.setAttribute('id', id)
  toolTipEl.innerHTML = title
  const offset = 40
  const styles = {    
    position: 'absolute',
    willChange: 'transform',
    top: '0px',
    left: '0px',
    backgroundColor: 'darkgrey',
    color: 'white',
    padding: '.5rem',
    transition: 'all 300ms ease-out',
    opacity: '0',
  };

  Object.assign(toolTipEl.style, styles);
  
  
  useEffect(() => {
    if (showToolTip) {            
      let rect = childEl.current.getBoundingClientRect();
      const top = rect.top + offset
      toolTipEl.style.transform = `translate3d(${rect.left}px, ${top}px, 0px)`
      document.body.appendChild(toolTipEl)
      
      var timeoutID = window.setTimeout(() => {
        const el = document.getElementById(id)        
        if (el) {
          el.style.opacity = 1
          el.style.transform = `translate3d(${rect.left}px, ${top - 10}px, 0px)`
        }
      }, 10);            
    } else {
      window.clearTimeout(timeoutID);
      const el = document.getElementById(id)
      if (el) {        
        document.body.removeChild(el) 
      }
    }

    return () => {
      window.clearTimeout(timeoutID);
      const el = document.getElementById(id)
      if (el) {        
        document.body.removeChild(el) 
      }
    }

  }, [id, showToolTip, toolTipEl])

  return (
    <span 
      ref={childEl}
      onMouseEnter={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
      >
      {children}
    </span>
  ) 
}