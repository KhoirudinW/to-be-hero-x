import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import SelectCharacter2 from './SelectCharacter2';


const FullCharData = ({character, allChar, onConfirm, onIndexChange, back}) => {
    if (!character) return null;
    const [hovered, setHovered] = useState(false);
    const [change, setChange] = useState(false);
    const [openSelection, setOpenSelection] = useState(false)
    const [index, setIndex] = useState(0)
    const [hasInitialized, setHasInitialized] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Tailwind breakpoint: md = 768px
      };
      handleResize(); // call on mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!hasInitialized) {
            setHasInitialized(true);
            return; 
          }
        
          if (onIndexChange) {
            onIndexChange(index);
          }
      }, [index]);

    const imageDisplay = change ? character.img1 : character.img
    // clip-path: polygon(60% 0, 100% 0, 40% 100%, 0% 100%);
  return (
    <div className="absolute w-full h-full z-50 text-white flex top-0 justify-center items-center px-4">
        <div className="relative flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[70%] border rounded-md bg-black/30">
            
            {/* Gambar Karakter */}
            <div className="w-full md:w-1/2 h-[300px] md:h-full flex items-center justify-center z-10 bg-black/40">
                <motion.img 
                    key={imageDisplay}
                    src={imageDisplay}
                    alt={character.name}
                    className="object-contain max-h-full max-w-full"
                    style={{ scale: character.scale - 0.5 }}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                />
            </div>

            {/* Info Karakter */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between bg-black/50 ">
                <div className='z-10'>
                    {/* Back Button */}
                    <div className="flex flex-row-reverse justify-end mb-4">
                        <button className="bg-red-500 py-1 px-3 rounded-md" onClick={back}>
                            Back
                        </button>
                    </div>

                    {/* Nama & Ganti Gambar */}
                    <motion.div
                        className="flex justify-between items-center"
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                    <h1 className="text-3xl md:text-5xl font-bold font-oswald uppercase">
                        {character.name}
                    </h1>
                    {character.img1 && (
                        <img
                        src="./src/assets/more/icon_changebtn.svg"
                        alt=""
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => setChange((prev) => !prev)}
                        className="w-8 h-8 transition-transform duration-300 cursor-pointer"
                        style={{
                            transform: `rotate(${hovered ? '0deg' : '180deg'})`,
                        }}
                        />
                    )}
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        className="text-base md:text-xl tracking-wide font-bold font-oswald mt-4 text-center bg-black rounded-md px-3 py-1"
                        style={{
                            color: character.color,
                            visibility: character.title ? "visible" : "hidden"
                        }}
                        initial={{ opacity: 0, x: -150 }}
                        animate={{ opacity: character.title ? 1 : 0, x: character.title ? 0 : -150 }}
                        transition={{ duration: 1 }}
                        >
                        {character.title || ''}
                    </motion.h2>

                    {/* Deskripsi */}
                    <motion.p
                        className="text-sm md:text-lg font-lexend mt-3"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.4 }}
                    >
                    {character.desc}
                    </motion.p>
                </div>

            {/* Ranking */}
            <div className="text-center mt-6">
                <motion.h6
                    className="text-xs font-lexend tracking-wide mb-1 bg-black inline-block px-2 py-1 rounded"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                RANKING no.
                </motion.h6>
                <motion.h1
                    className="text-4xl md:text-6xl font-oswald font-bold text-red-400"
                    initial={{ opacity: 0, y: -150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                {character.rank}
                </motion.h1>
            </div>
            </div>
        </div>
        <motion.button 
                className='z-50 absolute bottom-52 cursor-pointer'
                initial={{bottom: '-10px'}}
                animate={{bottom: openSelection ? '20px' : '80px', transform: `rotate(${openSelection ? 180 : 0}deg)`}}
                transition={{duration: openSelection ? 1 : 1.5}}
                onClick={() => setOpenSelection((prev)=> !prev)}
            >
                <img src="./src/assets/more/up.svg" width={30} alt="" />
        </motion.button>

        {/* Toggle SelectCharacter2 */}
        <motion.div
                className="absolute w-[100%] md:w-[100%]"
                initial={{bottom: '-400px'}}
                animate={{
                    bottom: openSelection
                      ? isMobile
                        ? '120px'   // 📱 lebih tinggi di mobile
                        : '90px'    // 💻 normal di desktop
                      : isMobile
                        ? '-350px'  // sembunyikan juga lebih dalam di mobile
                        : '-350px',
                  }}
                transition={{duration: 1}}
            >
                <SelectCharacter2
                    characters={allChar}
                    selectedChar={character}
                    onConfirm={(char) => {
                        if (openSelection) {
                            onConfirm(char);
                            setOpenSelection(false);
                            setIndex(allChar.findIndex(c => c.name === char.name))
                        }
                    }}
                />

        </motion.div>
    </div>

  )
}

export default FullCharData