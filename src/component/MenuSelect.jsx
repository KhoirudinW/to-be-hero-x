import React, { useState, useEffect  } from 'react';
import { motion } from 'framer-motion';
import SelectCharacter from './SelectCharacter';

function MenuSelect({data, onConfirm, onIndexChange}) {

    const characters = data
    const [selectedIndex, setSelectedIndex] = useState(0); // start from 'x'
    const [isConfirmed, setIsConfirmed] = useState(false);


    const cardWidth = 220;
    const centerIndex = 2; // index tengah dari visible slot

    const visibleCount = 5;

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    const getVisibleCharacters = () => {
        const result = [];
        for (let i = 0; i < visibleCount; i++) {
            const index = (selectedIndex - centerIndex + i + characters.length) % characters.length;
            result.push({ ...characters[index], originalIndex: index });
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
                className="h-[100vh] fixed -left-4 -z-10"
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
                className="h-[100vh] fixed -right-4 -z-10"
            />
            <SelectCharacter
                characters={characters}
                selectedIndex={selectedIndex}
                handleSelect={handleSelect}
                visibleCharacters={visibleCharacters}
                isConfirmed={isConfirmed}
                setIsConfirmed={setIsConfirmed}
                onConfirm={(char) => {
                    onConfirm(char)
                }}
            />
        </motion.div>
    );
}

export default MenuSelect;
