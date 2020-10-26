import React from 'react';

function DownArrow({size = 16, color, strokeColor, className, style, onClick}) {
  return (
    <svg width={size} className={className} style={style} viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M5.97163 9.66887C6.40428 10.1978 7.17314 10.5 8 10.5C8.82686 10.5 9.59572 10.1978 10.0284 9.66887L15.1893 3.35897C15.6136 2.84015 15.5787 2.28394 15.2338 1.821C14.8715 1.33452 14.1382 0.932836 13.1609 0.932836H2.83908C1.86176 0.932836 1.12854 1.33452 0.766171 1.821C0.421343 2.28394 0.386374 2.84016 0.810715 3.35897L5.97163 9.66887Z" fill={color} stroke={strokeColor}/>
    </svg>
  );
}

export default function Arrows({size, color, offset = "0.525rem", className, TopAction, BottomAction}) {
  return (
    <span className={className}>
      <DownArrow className="Arrow" style={{transform: "scale(-1)", top: offset}}
        size={size} color={color} onClick={TopAction}
      />
      <DownArrow className="Arrow" style={{bottom: offset}}
        size={size} color={color} onClick={BottomAction}
      />
    </span>
  );
}
