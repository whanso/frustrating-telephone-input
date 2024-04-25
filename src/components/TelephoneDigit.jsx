import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function TelephoneDigit({
  numerical,
  classNames,
  onSelect,
  show,
}) {
  const boxSize = 100;
  const [duration, setDuration] = useState(getRandomNumber(0.5, 2));
  const [animating, setAnimating] = useState(false);
  const { height: screenHeight, width: screenWidth } = useWindowSize();
  const [destLoc, setDestLoc] = useState(null);

  useEffect(() => {
    if (screenWidth && screenHeight) {
      if (destLoc === null) {
        setDestLoc({
          x: getDestinationBoxPosition(boxSize, screenHeight, screenWidth).x,
          y: screenHeight - boxSize,
        });
      } else {
        if (animating) {
          if (destLoc.x >= screenWidth - boxSize) {
            setDestLoc((destLoc) => ({ ...destLoc, x: screenWidth - boxSize }));
          }
          if (destLoc.y >= screenHeight - boxSize) {
            setDestLoc((destLoc) => ({
              ...destLoc,
              y: screenHeight - boxSize,
            }));
          }
        }
      }
    }
  }, [screenWidth, screenHeight]);

  if (screenWidth === 0 || screenHeight === 0 || destLoc === null) return null;

  return (
    <motion.div
      animate={{ opacity: show ? 100 : 0 }}
      transition={{
        ease: "linear",
        duration: 2,
      }}
      className="opacity-0"
    >
      <motion.div
        onClick={onSelect}
        animate={{ x: destLoc.x, y: destLoc.y }}
        transition={{
          ease: "linear",
          duration: duration,
        }}
        onAnimationStart={() => setAnimating(true)}
        onAnimationComplete={() => {
          setDuration(getRandomNumber(0.5, 2));
          setAnimating(false);
          const newCoords = getDestinationBoxPosition(
            boxSize,
            screenHeight,
            screenWidth
          );
          // box ended on the left or right side.
          if (destLoc.x === screenWidth - boxSize || destLoc.x === 0) {
            const upOrDown = getRandomIntInclusive(1, 2);
            if (upOrDown === 1) {
              setDestLoc({
                x: newCoords.x,
                y: 0,
              });
            } else {
              setDestLoc({
                x: newCoords.x,
                y: screenHeight - boxSize,
              });
            }
          } else if (destLoc.y === screenHeight - boxSize || destLoc.y === 0) {
            // box ended on the top or bottom side.
            const leftOrRight = getRandomIntInclusive(1, 2);
            if (leftOrRight === 1) {
              setDestLoc({
                x: 0,
                y: newCoords.y,
              });
            } else {
              setDestLoc({
                x: screenWidth - boxSize,
                y: newCoords.y,
              });
            }
          }
        }}
        className={twMerge(
          ` rounded-[50%] bg-red-400 cursor-pointer w-[100px] h-[100px] inline-flex items-center justify-center absolute top-0 text-6xl font-bold`,
          classNames
        )}
      >
        {numerical}
      </motion.div>
    </motion.div>
  );
}

function getDestinationBoxPosition(boxSize, screenHeight, screenWidth) {
  if (!screenHeight || !screenWidth) return { x: 0, y: 0 };

  const width = getRandomIntInclusive(0, screenWidth - boxSize);
  const height = getRandomIntInclusive(0, screenHeight - boxSize);

  return { x: width, y: height };
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
