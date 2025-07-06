import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const SelectCharacter = ({
  characters,
  selectedIndex,
  handleSelect,
  visibleCharacters,
  isConfirmed,
  setIsConfirmed,
  onConfirm,
  centerIndex
}) => {

  const isMobile = window.innerWidth < 768;
  const selectedChar = visibleCharacters[centerIndex] || {};

  return (
    <div className="flex flex-col gap-5 pt-32 min-h-screen">
      <h1 className="mx-auto mt-16 font-bold text-2xl md:text-4xl uppercase font-oswald text-white">Select character</h1>

      <div className={`relative w-[100%] lg:scale-100 max-w-6xl md:h-[400px] min-h-[300px] pt-3  mx-auto overflow-hidden`}>
        <motion.div
          className="flex gap-2  w-full justify-center absolute"
        >
          <button
            onClick={() => handleSelect((selectedIndex - 1 + characters.length) % characters.length)}
            className="text-white text-2xl md:text-4xl hover:scale-125 transition xl:block hidden"
          >
            ←
          </button>

          {visibleCharacters.map((char, i) => {
            const isSelected = i === centerIndex;
            // console.log(centerIndex);
            return (
              <motion.div
                key={`${char.name}-${char.originalIndex}`}
                className={`transition-all duration-500 ${isSelected ? 'z-10' : 'z-0'}`}
                style={{
                    width: isSelected ? 'min(30vw, 220px)' : 'min(22vw, 180px)',
                    height: isSelected ? isMobile   ? '250px'  : '300px' : '200px',
                    overflow: 'hidden',
                    borderRadius: isSelected ? 10 : 0,
                    backgroundColor: isSelected ? char.color : 'transparent',
                    backgroundImage: isSelected
                        ? 'radial-gradient(rgba(0,0,0,0.2) 1px, transparent 1px)'
                        : '',
                    filter: `grayscale(${isSelected ? 0 : 100}%)`,
                    boxShadow: isSelected ? `1px 1px 20px ${char.color}` : 'none',
                    backgroundSize: '6px 6px',
                }}
                transition={{  duration: 1, ease: 'easeInOut' }}

              >
                <button
                  onClick={() => handleSelect(char.originalIndex)}
                  className="border-none relative cursor-pointer w-full h-full border border-blue-50"
                >
                  <img
                    src={char.img}
                    alt={char.name}
                    style={{
                      transform: isSelected ? 'scale(1.3)' : 'scale(1)',
                      width: '100%',
                      height: isSelected ? '300px' : '100%',
                      objectFit: 'cover',
                      transition: 'all 0.3s ease',
                      position: 'absolute',
                      left: isSelected ? char.styleSelect1.left : 0,
                      top: char.styleSelect1.top,
                    }}
                  />
                </button>
              </motion.div>
            );
          })}

          <button
            onClick={() => handleSelect((selectedIndex + 1) % characters.length)}
            className="text-white text-2xl md:text-4xl hover:scale-125 transition hidden xl:block"
          >
            →
          </button>
        </motion.div>
      </div>

      {/* Animated name */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isConfirmed ? 100 : 0, opacity: isConfirmed ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="mx-auto overflow-hidden"
      >
        <AnimatedText text={selectedChar.name} color={selectedChar.color} />
      </motion.div>

      {/* Confirm Button */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isConfirmed ? 100 : 0, opacity: isConfirmed ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
        className="mx-auto overflow-hidden"
      >
        <button
          className="bg-green-700 py-1 px-3 text-2xl font-bold cursor-pointer text-white rounded-md"
          onClick={() => {
            setIsConfirmed(true);
            setTimeout(() => {
              onConfirm(selectedChar);
            }, 1000);
          }}
        >
          Confirm
        </button>
      </motion.div>
    </div>
  );
};

export default SelectCharacter;
