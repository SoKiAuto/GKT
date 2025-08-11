import React, { useMemo } from "react";

import Icon1 from "../assets/Icons/Icon1.png";
import Icon2 from "../assets/Icons/Icon2.png";
import Icon3 from "../assets/Icons/Icon3.png";
import Icon4 from "../assets/Icons/Icon4.png";
import Icon5 from "../assets/Icons/Icon5.png";
import Icon6 from "../assets/Icons/Icon6.png";
import Icon7 from "../assets/Icons/Icon7.png";

const TravelBackground = () => {
  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];

  const scatteredIcons = useMemo(() => {
    const arr = [];
    const totalIcons = 250; // reduce a bit for cleaner layout
    const minGap = 15; // minimum space between icons in px

    for (let i = 0; i < totalIcons; i++) {
      let tries = 0;
      let placed = false;

      while (!placed && tries < 100) {
        tries++;
        const size = 30 + Math.random() * 50;
        const x = Math.random() * (100 - size / window.innerWidth * 100);
        const y = Math.random() * (100 - size / window.innerHeight * 100);

        const collision = arr.some((item) => {
          const dx = (item.x - x) * (window.innerWidth / 100);
          const dy = (item.y - y) * (window.innerHeight / 100);
          const dist = Math.sqrt(dx * dx + dy * dy);
          return dist < (item.size / 2 + size / 2 + minGap);
        });

        if (!collision) {
          arr.push({
            icon: icons[Math.floor(Math.random() * icons.length)],
            x,
            y,
            size,
            rotation: Math.random() * 360,
            opacity: 0.08 + Math.random() * 0.07,
          });
          placed = true;
        }
      }
    }
    return arr;
  }, [icons]);

  return (
    <div className="absolute inset-0 z-0 bg-white overflow-hidden">
      {scatteredIcons.map((item, idx) => (
        <img
          key={idx}
          src={item.icon}
          alt=""
          style={{
            position: "absolute",
            top: `${item.y}%`,
            left: `${item.x}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            transform: `rotate(${item.rotation}deg)`,
            opacity: item.opacity,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      ))}
    </div>
  );
};

export default TravelBackground;
