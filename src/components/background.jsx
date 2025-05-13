import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <div
        style={{
          background: 'radial-gradient(ellipse at center, #AEEFEC, transparent)'
        }}
        className="absolute inset-0"
      ></div>

      <div
        style={{
          background: 'radial-gradient(ellipse at top right, #AEEFEC7A, transparent)'
        }}
        className="absolute inset-0"
      ></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
