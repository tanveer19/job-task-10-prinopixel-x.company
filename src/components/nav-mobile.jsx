import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Fade as Hamburger } from "hamburger-react";
import { useEffect } from "react";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div ref={ref} className="">
      <Hamburger toggled={isOpen} size={26} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-30 p-5 pt-0 bg-white border-b border-b-white/20 overflow-y-auto h-screen"
          >
            <div className="flex flex-col md:flex-row w-screen h-screen">
              <div className="w-1/5"></div>
              <div className="w-1/5 leading-[3] text-3xl">
                <ul>
                  <li className="text-[#ffb300]">EXPLORE</li>
                  <li>X</li>
                  <li>Projects</li>
                  <li>Life at X</li>
                  <li>Careers</li>
                  <li>Moonshot Thinking</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className="w-1/5"></div>

              <div className="w-1/5 leading-[3] text-3xl">
                <ul>
                  <li className="text-[#ffb300]">CONNECT</li>
                  <li>LinkedIn</li>
                  <li>YouTube</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                </ul>
              </div>
              <div className="w-1/5 leading-[3] text-3xl">
                <ul>
                  <li className="text-[#ffb300]">LEARN</li>
                  <li>Contact</li>
                  <li>Privacy+terms </li>
                  <li>Google</li>
                  <li>Alphabet</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
