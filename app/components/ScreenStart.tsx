"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const ScreenStart = () => {
  const [showScreenStart, setShowScreenStart] = useState(true);
  const [fadeClass, setFadeClass] = useState("opacity-100"); // Mulai dengan opacity-0 untuk fade-in

  useEffect(() => {
    // Atur untuk fade-in pada awalnya
    const fadeInTimer = setTimeout(() => {
      setFadeClass("opacity-100");
    }, 100); // Mulai fade-in sedikit setelah komponen dimuat

    // Atur untuk fade-out setelah 4 detik
    const fadeOutTimer = setTimeout(() => {
      setFadeClass("opacity-0");
    }, 6000); // Mulai fade-out setelah 4 detik

    // Hapus ScreenStart sepenuhnya setelah fade-out
    const removeScreenStart = setTimeout(() => {
      setShowScreenStart(false);
    }, 7000); // Hapus setelah 6 detik

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(removeScreenStart);
    };
  }, []);

  if (!showScreenStart) {
    return null;
  }

  return (
    <div
      className={` text-white flex flex-col justify-center items-center min-h-screen transition-opacity duration-1000 ${fadeClass}`}
    >
      <TypeAnimation
        sequence={[
          "THE WEDDING OF",
          2000, // Tampilkan selama 2 detik
          "GLENN & CINDY",
          1000, // Tampilkan selama 1 detik
        ]}
        wrapper="span"
        speed={20}
        style={{
          fontSize: "2em",
          display: "inline-block",
        }}
        className="font-legan text-sm"
        repeat={0} // Animasi terus diulang
      />
    </div>
  );
};

export default ScreenStart;
