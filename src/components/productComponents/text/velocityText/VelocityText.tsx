"use client";

import React, { useRef } from "react";
import {
  useVelocity,
  useScroll,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";

export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );

  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const XRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
  const x = useSpring(XRaw);

  return (
    <section
      ref={targetRef}
      className="h-[1000vh] bg-neutral-50 text-neutral-950"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.p
          style={{
            skewX,
            x,
          }}
          className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
        >
          Nothing in this world can you take the place of persistance. Talent
          will not; nothing is more common than unsuccessful men with talent.
          Genius will not; unrewarded genius is almost a proverb. Education will
          not; the world is full of educated derelicts. Persistence and
          determination alone are omnipotent. The slogan &apos;Press On&apos;
          has solved and always will solve the problems of the human race. -
          Calvin Coolidge
        </motion.p>
      </div>
    </section>
  );
};
