import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorRef.current.style.left = `${e.pageX}px`;
      cursorRef.current.style.top = `${e.pageY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor">
      <div className="ripple" style={{ width: '1in', height: '1in', animationDelay: '0s' }}></div>
      <div className="ripple" style={{ width: '2in', height: '2in', animationDelay: '0.3s' }}></div>
      <div className="ripple" style={{ width: '4in', height: '4in', animationDelay: '0.6s' }}></div>
      <div className="ripple" style={{ width: '6in', height: '6in', animationDelay: '0.9s' }}></div>
    </div>
  );
};

export default CustomCursor;
