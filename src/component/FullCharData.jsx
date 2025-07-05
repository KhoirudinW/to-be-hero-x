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

    useEffect(() => {
        if (!hasInitialized) {
            setHasInitialized(true);
            return; // ⛔ Hindari trigger pertama kali
          }
        
          if (onIndexChange) {
            onIndexChange(index);
          }
      }, [index]);

    const imageDisplay = change ? character.img1 : character.img
    // clip-path: polygon(60% 0, 100% 0, 40% 100%, 0% 100%);
  return (
    <div className="absolute w-full h-full z-50  text-white flex top-40  justify-center">
        <div className="relative flex w-[40%] h-[60%] rounded ">
            {/* Gambar Karakter */}
            <div className="w-1/2 absolute h-full flex items-center justify-center top-0 ">
                <motion.img 
                    key={imageDisplay} // penting agar Framer mendeteksi perubahan
                    src={imageDisplay} 
                    alt={character.name} 
                    className={`object-cover `}
                    style={{ scale: character.scale }}
                    initial={{ opacity: 0, x:100 }}
                    animate={{ opacity: 1, x:0 }}
                    transition={{ duration: 0.6 }}
                />
            </div>

            {/* Info Karakter */}
            <div className="w-1/2 absolute h-full p-10 flex flex-col justify-between top-0 right-0">
                <div>
                    <div className="flex flex-row-reverse gap-10">
                        <button className='bg-red-500 py-1 px-2 my-5 rounded-md cursor-pointer' onClick={()=> back()}>
                            Back
                        </button>
                    </div>
                    <motion.div 
                        className="flex flex-row-reverse gap-10"
                        initial={{opacity: 0, x:-200}}
                        animate={{opacity: 1, x:0}}
                        transition={{ duration: 0.7 }}

                    >
                        <h1 className='text-6xl font-bold font-oswald uppercase'>{character.name}</h1>
                        <img
                            src="./src/assets/more/icon_changebtn.svg"
                            alt=""
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            onClick={()=> setChange((prev)=> !prev)}
                            className="size-15 transition-all duration-300"
                            style={{ 
                                transform: `rotate(${hovered ? '0deg' : '180deg'})`,
                                display: character.img1 ? '' : 'none',
                            }}
                        />

                    </motion.div>

                    <motion.h2 
                        className={`text-xl tracking-wide font-bold font-oswald mb-4 w-full text-center mt-3 bg-black rounded-md px-2 py-1`} 
                        style={{
                            color:character.color,
                            visibility: character.title ? "visible" : "invisible"
                        }}
                        initial={{opacity: 0, x:-150}}
                        animate={{ opacity: character.title ? 1 : 0, x: character.title ? 0 : -150 }}
                        transition={{ duration: 1 }}
                    >
                        {character.title || 'halo'}
                    </motion.h2>

                    <motion.p 
                        className="text-lg font-lexend mb-8 text-white text-shadow-md"
                        initial={{opacity: 0, x:-100}}
                        animate={{opacity: 1, x:0}}
                        transition={{ duration: 1.4 }}
                    >
                        {character.desc}
                    </motion.p>
                </div>

                <div className="text-center">
                    <motion.h6 
                        className="text-xs font-lexend tracking-wide mb-1 bg-black inline-block px-2 py-1 rounded"
                        initial={{opacity: 0, y:-100}}
                        animate={{opacity: 1, y:0}}
                        transition={{ duration: 1 }}
                    >
                    RANKING no.
                    </motion.h6>
                    <motion.h1 
                        className="text-8xl font-oswald font-bold text-red-400"
                        initial={{opacity: 0, y:-150}}
                        animate={{opacity: 1, y:0}}
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
                animate={{bottom: openSelection ? '180px' : '260px', transform: `rotate(${openSelection ? 180 : 0}deg)`}}
                transition={{duration: openSelection ? 1 : 1.5}}
                onClick={() => setOpenSelection((prev)=> !prev)}
            >
                <img src="./src/assets/more/up.svg" width={30} alt="" />
            </motion.button>
            <motion.div 
                className="absolute w-[65%] h-[40%] "
                initial={{bottom: '-400px'}}
                animate={{bottom: openSelection ? '250px' : '-170px'}}
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