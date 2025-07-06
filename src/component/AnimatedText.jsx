import React, { useEffect, useRef  } from 'react';
import gsap from 'gsap';

function AnimatedText({ text, color }) {
        const textRef = useRef([]);
    
        useEffect(() => {
            if (!textRef.current) return;
    
            gsap.fromTo(
                textRef.current,
                {
                    y: 60,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    stagger: 0.05,
                }
            );
        }, [text]);
    
        return (
            <h1
                className="mx-auto font-bold text-6xl md:text-9xl uppercase font-oswald flex justify-center select-none"
                style={{ color }}
            >
                {text.split('').map((char, index) => (
                    <span
                        key={index}
                        ref={(el) => (textRef.current[index] = el)}
                        className="inline-block"
                        style={{ display: 'inline-block', minWidth: char === ' ' ? '0.5em' : 'auto' }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </h1>
        );
}

export default AnimatedText