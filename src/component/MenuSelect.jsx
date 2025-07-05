import React from 'react'
import {useState} from 'react'

function MenuSelect() {
    const [selectChar, setSelectChar] = useState(false);

    const standbyChar = {
        width: "100%",
        height: "100%",
        objectFit: 'cover'
    };

    const selectedChar = {
        width: "100%",
        height: "300px",
        objectFit: 'cover'
    };

    const selectedCard = {
        width: "200px",
        height: "300px",
        overflow: "hidden",
        backgroundColor: "white",
        borderRadius: "10px",
    } 
    
    const standbyCard = {
        width: "200px",
        height: "200px",
        overflow: "hidden",
    }

    return (
        <div className='fixed top-0 w-full h-screen bg-black z-10'>
            <div className="flex flex-col gap-5 pt-32 min-h-screen">
                <div className="flex gap-5 justify-center items-center">
                    <div style={standbyCard}>
                        <button onClick={() => setSelectChar(prev => !prev)} className='border-none cursor-pointer'>
                            <img style={selectChar ? selectedChar : standbyChar} src="./src/assets/queen.png" alt="" />
                        </button>
                    </div>
                    <div style={selectedCard}>
                        <img style={selectedChar} src="./src/assets/x.png" alt="" />
                    </div>
                    <div className="w-[200px] h-[200px] overflow-hidden">
                        <img style={standbyChar} src="./src/assets/nice.png" alt="" />
                    </div>
                </div>
                <h1 className='mx-auto mt-16 font-bold text-9xl uppercase font-oswald'>halo</h1>
            </div>
        </div>
    )
}

export default MenuSelect