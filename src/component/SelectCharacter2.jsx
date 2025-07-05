import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SelectCharacter2({ characters, selectedChar, onConfirm }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 pe-24 grid grid-cols-11 gap-4">
        {characters.map((char, i) => {
          const isSelected = selectedChar?.name === char.name;
          const isHovered = hoveredIndex === i;

          return (
            <button
              key={i}
              className="relative w-[200px] h-[40vh] bg-white/5 border border-gray-700 overflow-hidden backdrop-blur-sm cursor-pointer"
              style={{
                clipPath: 'polygon(60% 0, 100% 0, 40% 100%, 0% 100%)',
              }}
              onClick={()=>setTimeout(() => {
                onConfirm(char);
              })}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-[300px] h-[400px] aspect-[3/4] overflow-hidden relative top-0 rounded">
                <motion.img
                  src={char.img}
                  alt={char.name}
                  className="w-full h-full absolute object-cover"
                  style={{
                    left: char.styleSelect2?.left,
                    filter: isSelected || isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                  }}
                  animate={{
                    scale: isHovered ? 2.1 : 2,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectCharacter2;
