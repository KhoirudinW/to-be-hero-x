import React, { useState, useEffect } from "react";
import MenuSelect from "./component/MenuSelect";
import FullCharData from "./component/FullCharData";
import Background from "./component/Background";

const App = () => {
        const [indexVd, setIndexVd] = useState(1);

        const charSelect = [
                {
                        start: 0,
                        end: 28,
                        src: "./src/assets/trailer/x-trailer.mp4",
                },
                {
                        start: 0,
                        end: 28,
                        src: "./src/assets/trailer/queen-trailer.mp4",
                },
                {
                        start: 0,
                        end: 14,
                        src: "./src/assets/trailer/dragon-boy-trailer.mp4",
                },
                {
                        start: 0,
                        end: 28,
                        src: "./src/assets/trailer/ghostblade-trailer.mp4",
                },
                {
                        start: 0,
                        end: 26,
                        src: "./src/assets/trailer/the-jonniees-trailer.mp4",
                },
                {
                        start: 0,
                        end: 27,
                        src: "./src/assets/trailer/loli-trailer.mp4",
                },
                {
                        start: 0,
                        end: 30,
                        src: "./src/assets/trailer/cyan-trailer.mp4",
                },
                {
                        start: 0,
                        end: 20,
                        src: "./src/assets/trailer/ahu-trailer.mp4",
                },
                {
                        start: 0,
                        end: 27,
                        src: "./src/assets/trailer/e-soul-trailer.mp4",
                },
                {
                        start: 0,
                        end: 19,
                        src: "./src/assets/trailer/nice(linlin)-trailer.mp4",
                },
                {
                        start: 0,
                        end: 19,
                        src: "./src/assets/trailer/nice(linlin)-trailer.mp4",
                },
        ];

        const characters = [
                {
                        name: "x",
                        img: "./src/assets/x.png",
                        desc: "A man in a suit who claimed the title of X in the blink of an eye. His lack of affiliation to any organization makes him all the more enigmatic.",
                        title: "Top hero X, known to all and known by none",
                        rank: "1",
                        color: "#c800ff",
                        styleSelect1: {
                                top: "-30px",
                        },
                        styleSelect2: {
                                left: "0px",
                        },
                        scale: 2.6,
                },
                {
                        name: "queen",
                        img: "./src/assets/queen.png",
                        img1: "./src/assets/queenV2.png",
                        desc: "The pinnacle of female heroes, Queen is superior in many ways. She hopes to win the tournament to bring order to the world.",
                        title: "Lady for whom no less than Number One will suffice",
                        rank: "2",
                        color: "#dbc532",
                        styleSelect1: {
                                top: "-5px",
                        },
                        styleSelect2: {
                                left: "0px",
                        },
                        scale: 2.6,
                },
                {
                        name: "dragonboy",
                        img: "./src/assets/dragon-boy.png",
                        desc: "An unruly lone wolf known for his superhuman resilience, he eagerly awaits his opportunity to take the title of X with his indomitable fighting spirit.",
                        title: "Outsider of unwavering ambition",
                        rank: "3",
                        color: "#a51cba",
                        styleSelect1: {
                                top: "-0px",
                        },
                        styleSelect2: {
                                left: "0px",
                        },
                        scale: 3,
                },
                {
                        name: "ghostblade",
                        img: "./src/assets/ghostblade.png",
                        desc: "A cool-headed hero who completes his mission without uttering a single word. He is loved by his many fans for the silence with which he completes his work and for the chiseled, handsome face behind the mask.",
                        title: "The silent killer from whom even speech knows no escape",
                        rank: "4",
                        color: "#e3cf17",
                        styleSelect1: {
                                top: "-20px",
                        },
                        styleSelect2: {
                                left: "-50px",
                        },
                        scale: 2.8,
                },
                {
                        name: "the johnnies",
                        img: "./src/assets/the-johnnies.png",
                        desc: "A hero duo that's become famous for their mascott-like charm. Once Big Johnny goes berserk, only Little Johnny can stop him.",
                        title: "An unwavering bond between a man and a beast",
                        rank: "5",
                        color: "#28c90c",
                        styleSelect1: {
                                top: 0,
                        },
                        styleSelect2: {
                                left: "-22px",
                        },
                        scale: 2.6,
                },
                {
                        name: "loli",
                        img: "./src/assets/loli.png",
                        img1: "./src/assets/loliV2.png",
                        desc: "A girl in a battle suit jam-packed with all kinds of tricky gadgets. She confronts all her opponents with engineering talent and a strong sense of justice.",
                        title: "Gifted mech girl hero of justice",
                        rank: "6",
                        color: "#e332b4",
                        styleSelect1: {
                                top: 0,
                        },
                        styleSelect2: {
                                left: "0px",
                        },
                        scale: 3.2,
                },
                {
                        name: "Lucky cyan",
                        img: "./src/assets/cyan.png",
                        img1: "./src/assets/cyanV2.png",
                        desc: "A singer-songwriter blessed with exceptional luck and a natural voice. Lucky Cyan is overwhelmingly popular both as a hero and as a musician.",
                        title: "The color of happiness, shared through song",
                        rank: "7",
                        color: "#00d6cb",
                        styleSelect1: {
                                top: 0,
                        },
                        styleSelect2: {
                                left: "-70px",
                        },
                        scale: 4,
                },
                {
                        name: "ahu",
                        img: "./src/assets/ahu.png",
                        desc: "An empathic, loyal hero dog that made it into the Top 10 at record speed, Ahu turns gratitude into superpowers.",
                        title: "Hard-boiled superdog",
                        rank: "8",
                        color: "#8c5200",
                        styleSelect1: {
                                top: 0,
                        },
                        styleSelect2: {
                                left: "-60px",
                        },
                        scale: 2.5,
                },
                {
                        name: "e-soul",
                        img: "./src/assets/e-soul.png",
                        img1: "./src/assets/e-soulV2.png",
                        desc: "A legendary hero long cherished by the people. Slays his enemies with lightning speed.",
                        title: "A streak of light inherited",
                        rank: "9",
                        color: "#00bbff",
                        styleSelect1: {
                                top: 0,
                                left: "-20px",
                        },
                        styleSelect2: {
                                left: "-240px",
                        },
                        scale: 2.7,
                },
                {
                        name: "nice",
                        img: "./src/assets/nice.png",
                        desc: "A manifestation of the perfect hero as imagined by the people. He brings the elegance of a ballerino to all his battles, mesmerizing all who witness them.",
                        title: "No less than a flawless dance and a flawless victory for Mr. Perfect",
                        rank: "10",
                        color: "white",
                        styleSelect1: {
                                top: "-20px",
                        },
                        styleSelect2: {
                                left: "-5px",
                        },
                        scale: 2.1,
                },
                {
                        name: "lin ling",
                        img: "./src/assets/nice(linlin).png",
                        img1: "./src/assets/nice(linlinV2).png",
                        desc: "Staff at the company that produces commercials for Nice and Moon. He is worked to the bone by his employers with hardly any time off.",
                        title: null,
                        rank: "10",
                        color: "white",
                        styleSelect1: {
                                top: "-20px",
                        },
                        styleSelect2: {
                                left: "-5px",
                        },
                        scale: 2.6,
                },
        ];

        const [showFullCharacter, setShowFullCharacter] = useState(false);
        const [selectedCharData, setSelectedCharData] = useState(null);
        // const [selectedCharData, setSelectedCharData] = useState(characters[0]);
        // console.log(characters[0].styleSelect2.left);

        const handleBack = () => {
          setSelectedCharData(null);
          setShowFullCharacter(false);
        };
      
        return (
                <div 
                className="relative w-[100dvw] min-h-[100dvh] text-white overflow-hidden"
                >
                        <Background data={charSelect[indexVd]} />
                        <FullCharData
                                character={selectedCharData}
                                allChar={characters}
                                onConfirm={(char) => {
                                        setSelectedCharData(char);
                                }}
                                onIndexChange={(i) => setIndexVd(i)}
                                back={handleBack}
                        />
                        {!showFullCharacter ? (
                                <MenuSelect
                                        data={characters}
                                        onConfirm={(char) => {
                                                const index = characters.findIndex(c => c.name === char.name);
                                                if (index !== -1) setIndexVd(index); // <-- ini
                                                setSelectedCharData(char);
                                                setShowFullCharacter(true);
                                        }}
                                        onIndexChange={(i) => setIndexVd(i)}
                                
                                />
                        ) : null}
                </div>
        );
};

export default App;
