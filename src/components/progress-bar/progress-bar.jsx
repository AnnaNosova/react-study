import { useEffect, useState } from 'react';

export const ProgressBar = () => {

    const [coordY, setCoordY] = useState(window.scrollY);

    const determinePosition = () => {
        return (Math.round(
            ( coordY / ( document.body.scrollHeight - window.innerHeight ) ) * 100) + '%'
        );
    };

    useEffect(() => {
        window.addEventListener("scroll", () => setCoordY(window.scrollY));
        return () => window.removeEventListener("scroll", () => setCoordY(window.scrollY));
    }, []);

    return (
        <div className="progress-bar"
             style={{
                 width: determinePosition(),
                 height: "10px",
                 backgroundColor: "#DC2626",
                 overflow: "hidden",
                 position: "fixed" }}
        >
        </div>
    )
};