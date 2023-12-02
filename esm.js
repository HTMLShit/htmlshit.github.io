import React from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import confetti from "https://esm.sh/canvas-confetti@1.6.0";

const App = () => {
    function onMouseMove(e) {
        confetti({
            particleCount: 5,
            origin: {
                x: e.pageX / window.innerWidth,
                y: (e.pageY + 20) / window.innerHeight,
            },
        });
    }

    return (
        <div onMouseMove={onMouseMove}>
            <h1>Hello React!⚛️</h1>
            <p>Building user interfaces.</p>
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
