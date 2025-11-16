import { useEffect, useRef } from "react";

export default function NeonCursorGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
        const glow = glowRef.current;

        const handleMove = (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <>
            {/* Neon Cursor Glow */}
            <div ref={glowRef} className="cursor-glow"></div>

            {/* Gradient Background */}
            <div className="gradient-bg"></div>
        </>
    );
}