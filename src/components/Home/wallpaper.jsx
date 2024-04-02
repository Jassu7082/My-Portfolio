import React from 'react';
import './wallpaper.css';
const Wallpaper = () => {
  const items = Array.from({ length: 21 }, (_, index) => index);

  return (
    <div className="wallpaper z-[-1] justify-center item-center">
      <div className="container1">
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{
              '--i': index,
              width: `calc(${index} * 2.5vmin)`,
              animationDelay: `calc(${index} * 0.08s)`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Wallpaper;
