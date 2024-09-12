"use client";

import { useState, useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const WeddingScreen = () => {
  const [fadeClass, setFadeClass] = useState("opacity-0"); // Untuk fade-in pertama kali
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  // Untuk fade-in pertama kali
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeClass("opacity-100");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen && audioRef.current) {
      // Play music when "Open" is clicked
      (audioRef.current as HTMLAudioElement).play();
    }
  };

  return (
    <div
      className={`h-screen w-screen flex flex-col md:flex-row ${fadeClass} transition-opacity duration-1000`}
    >
      {/* Gambar sisi kiri Wide Untuk Komputer */}
      <div
        className="md:flex justify-center hidden items-end pb-12 w-2/3 h-1/2 md:h-full"
        style={{
          backgroundImage: `url(/foto_1_samping.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" bottom-10 left-20 font-ovo text-lg text-white tracking-[5px]">
          GLENN & CINDY
        </div>
      </div>

      {/* Konten teks sisi kanan bisa scroll untuk pc */}
      <div className=" md:w-1/3 h-full overflow-y-auto ">
        <div
          id="backgroundWedding"
          className="w-full h-screen flex items-center justify-center "
        >
          <div className="text-center p-5 flex flex-col h-full justify-between py-20">
            <div className="gap-y-2 md:gap-y-4 flex flex-col">
              <h5 className="text-sm font-legan text-white uppercase tracking-wide">
                The Wedding Of
              </h5>
              <h1 className="text-2xl md:text-3xl font-ovo t text-white uppercase">
                GLENN & CINDY
              </h1>
              <h5 className="text-sm  font-legan text-white uppercase tracking-wide">
                Saturday, 9th December 2024
              </h5>
            </div>
            <div>
              <p className="mt-5 text-lg">Dear,</p>
              {!isOpen ? (
                <button
                  className="mt-3 px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
                  onClick={handleOpen}
                >
                  Open
                </button>
              ) : (
                <IoIosArrowUp
                  stroke="4"
                  className="mx-auto mt-20 animate-upDown"
                />
              )}
            </div>
          </div>
        </div>
        {isOpen && (
          <>
            <div
              className=" text-white h-screen flex pt-12 p-5 "
              style={{
                backgroundImage: `url(/slide_1.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Display the content when the button is clicked */}
              <div className="relative z-10">
                <h1 className="text-xl md:text-2xl font-ovo tracking-wide text-white ">
                  ECCLESIASTES 4:9-12
                </h1>
                <p className="text-sm mt-5 font-legan">
                  Two are better than one because they have a good reward for
                  their toil. For if they fall, one will lift up his fellow. But
                  woe to him who is alone when he falls and has not another to
                  lift him up! Again, if two lie together, they keep warm, but
                  how can one keep warm alone? And though a man might prevail
                  against one who is alone, two will withstand him.
                </p>
                <p className="text-6xl mt-5 font-wonder">Glenn & Cindy</p>
              </div>
            </div>
            <div
              className=" text-white h-screen flex items-end pb-16 px-12 "
              style={{
                backgroundImage: `url(/slide_2.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Display the content when the button is clicked */}
              <div className="relative z-10">
                <p className="font-legan text-sm my-2">The Groom</p>
                <h1 className="text-xl md:text-3xl text-white  font-ovo">
                  GLENN REYSAN
                </h1>
                <h3 className="font-thesignature text-4xl">
                  The second son of
                </h3>
                <p className="text-sm mt-5 font-legan text-[#CCCCCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p className="text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#4E4E4E] w-fit px-4 py-2 text-[#CCCCCC]">
                  <FaInstagram /> GLEENN
                </p>
              </div>
            </div>
            <div
              className=" text-white h-screen flex items-end pb-16 px-12 "
              style={{
                backgroundImage: `url(/slide_3.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Display the content when the button is clicked */}
              <div className="relative z-10">
                <p className="font-legan text-sm my-2">The Bride</p>
                <h1 className="text-xl md:text-3xl text-white  font-ovo">
                  CINDY ANJANI SALAWAS
                </h1>
                <h3 className="font-thesignature text-4xl">
                  The first daughter of
                </h3>
                <p className="text-sm mt-5 font-legan text-[#CCCCCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p className="text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#4E4E4E] w-fit px-4 py-2 text-[#CCCCCC]">
                  <FaInstagram /> CINDY
                </p>
              </div>
            </div>
            <div
              className=" text-white h-screen flex  pt-16 px-12 "
              style={{
                backgroundImage: `url(/slide_4.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Display the content when the button is clicked */}
              <div className="relative z-10">
                <h1 className="text-xl md:text-5xl text-white  font-ovo">
                  A journey in love
                </h1>
                <h3 className="uppercase font-legan text-xl mt-5 mb-2">
                  SEPTEMBER 2019
                </h3>
                <p className="text-sm  font-legan text-white">
                  2019, we started our journey as two individuals who were just
                  getting to know each other. We were excited to explore what
                  the future held for us and were eager to see where our paths
                  would lead.
                </p>
                <h3 className="uppercase font-legan text-xl mt-5 mb-2">
                  SEPTEMBER 2020
                </h3>
                <p className="text-sm  font-legan text-white">
                  In 2020, we continued our journey, facing challenges and
                  obstacles along the way. We learned how to communicate
                  effectively and work together as a team, and our relationship
                  grew stronger as a result.
                </p>
                <h3 className="uppercase font-legan text-xl mt-5 mb-2">
                  SEPTEMBER 2023
                </h3>
                <p className="text-sm  font-legan text-white">
                  And now, in 2023, we have reached the pinnacle of our journey
                  – marriage. It has been a joyous and exciting ride filled with
                  laughter, love, and endless possibilities. We have made
                  countless memories together, from our first date to our
                  engagement, and now our wedding day. Our journey has been a
                  fulfilling one, and we are grateful for every moment we have
                  shared. We look forward to continuing our adventure as a
                  married couple.
                </p>
                <div className="relative flex items-center mt-5">
                  <hr className="w-[120px] mx-2 border-t border-gray-300" />
                  <span className="px-2 font-thesignature text-3xl">
                    Glenn & Cindy
                  </span>
                </div>
              </div>
            </div>
            <div
              className=" text-white h-screen flex flex-col items-center pt-16 px-12 "
              style={{
                backgroundImage: `url(/slide_5.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="uppercase font-legan text-xs tracking-wide mt-5 mb-2">
                save our date
              </h3>
              <h1 className="text-2xl w-[200px] text-center text-white  font-ovo">
                SATURDAY <br /> 01 MARCH 2024
              </h1>

              <div className="mt-5 mx-auto flex flex-col items-center">
                <h3 className="uppercase font-ovo text-sm text-center mt-5 mb-2">
                  Holy Matrimony <br /> 12.00 - 01.00 PM
                </h3>
                <p className="text-sm text-center  font-legan text-white">
                  Gereja Katedral Jakarta <br /> Jl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <p className="text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#808080] w-fit px-4 py-2 text-white">
                  Google Maps
                </p>
              </div>
              <div className="mt-5 mx-auto flex  flex-col items-center">
                <h3 className="uppercase font-ovo text-sm text-center mt-5 mb-2">
                  Wedding Reception <br /> 12.00 - 01.00 PM
                </h3>
                <p className="text-sm text-center  font-legan text-white">
                  Gereja Katedral Jakarta <br /> Jl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <p className="text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#808080] w-fit px-4 py-2 text-white">
                  Google Maps
                </p>
              </div>
            </div>
            <div
              className=" text-white h-screen flex flex-col items-center justify-end pb-16 px-12 "
              style={{
                backgroundImage: `url(/slide_6.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-2xl text-center text-white  font-ovo">
                ALMOST TIME FOR OURCELEBRATION
              </h1>
              {/* Countdown Timer */}
              <div className="flex space-x-4 mt-5 text-center  font-legan">
                <div className="flex flex-col">
                  <span className="text-lg font-bold">00</span>
                  <span className="text-sm uppercase">Days</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">00</span>
                  <span className="text-sm uppercase">Hours</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">00</span>
                  <span className="text-sm uppercase">Minutes</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">00</span>
                  <span className="text-sm uppercase">Seconds</span>
                </div>
              </div>
            </div>
            <div
              className=" text-white h-screen flex flex-col justify-between pt-16 pb-32 px-12 "
              style={{
                backgroundImage: `url(/foto_1_samping.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-2xl text-white  font-ovo">
                JOIN OUR EXCLUSIVE LIVE STREAMING EVENT
              </h1>

              <div className="mt-5 mx-auto flex flex-col ">
                <h3 className="uppercase font-ovo text-sm mt-5 mb-2">
                  SATURDAY, 1 MARCH 2024
                  <br /> 11.00 WIB
                </h3>
                <p className="text-sm font-legan text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p className="text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-[#3B3B3B] w-fit px-6 py-2 text-white">
                  Join Live Streaming
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Audio Element */}
      <audio ref={audioRef} src="/music/wedding_song.mp3" preload="auto" />
    </div>
  );
};

export default WeddingScreen;
