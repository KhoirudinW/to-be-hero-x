import React, { useState, useEffect  } from 'react';
import { motion } from 'framer-motion';
import SelectCharacter from './SelectCharacter';

function MenuSelect({data, onConfirm, onIndexChange}) {

    const characters = data
    const [selectedIndex, setSelectedIndex] = useState(0); // start from 'x'
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [visibleCount, setVisibleCount] = useState(5);
    const [centerIndex, setCenterIndex] = useState(2)

    useEffect(() => {
    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 768) {
        setVisibleCount(3); // Tablet & mobile
        setCenterIndex(1);
        } else {
        setVisibleCount(5); // Laptop & Desktop
        setCenterIndex(2);
        }
    };

    console.log(centerIndex);

    handleResize(); // initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);


    // const visibleCount = 5;

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    const getVisibleCharacters = () => {
        const result = [];
        const total = characters.length;
      
        for (let offset = -centerIndex; offset <= visibleCount - centerIndex - 1; offset++) {
          const index = (selectedIndex + offset + total) % total;
          result.push({
            ...characters[index],
            originalIndex: index,
          });
        }
      
        return result;
    };

    useEffect(() => {
        if (onIndexChange) {
          onIndexChange(selectedIndex);
        }
      }, [selectedIndex]);

    const visibleCharacters = getVisibleCharacters();

    return (
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isConfirmed ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full h-screen bg-black z-10"
        >

            <motion.img
                src="./src/assets/more/kiri1.png"
                alt=""
                initial={{ x: -200, opacity: 0 }}
                animate={{
                    x: isConfirmed ? -500 : 0,
                    opacity: isConfirmed ? 0 : 0.5
                }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="fixed w-[40%] md:w-auto md:h-[100vh] top-0 -left-4 -z-10 "
            />

            <motion.img
                src="./src/assets/more/kanan1.png"
                alt=""
                initial={{ x: 200, opacity: 0 }}
                animate={{
                    x: isConfirmed ? 500 : 0,
                    opacity: isConfirmed ? 0 : 0.5
                }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="fixed w-[40%] md:w-auto md:h-[100vh] bottom-0 -right-4 -z-10"
            />
            <SelectCharacter
                characters={characters}
                selectedIndex={selectedIndex}
                handleSelect={handleSelect}
                visibleCharacters={visibleCharacters}
                isConfirmed={isConfirmed}
                setIsConfirmed={setIsConfirmed}
                centerIndex={centerIndex}
                onConfirm={(char) => {
                    onConfirm(char)
                }}
            />
        </motion.div>
    );
}

export default MenuSelect;
