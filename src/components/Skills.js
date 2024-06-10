import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => setHasAnimated(true), 500);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [hasAnimated, skillRef]);

  return (
    <motion.div
      ref={skillRef}
      className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold lg:p-6 md:p-4 xs:p-2
      ${hasAnimated ? "opacity-100" : "opacity-0"}`}
      whileHover={{ scale: 2.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: hasAnimated ? x : 0, y: hasAnimated ? y : 0 }}
      transition={{ duration: 2.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl pt-64 w-full text-center md:text-6xl md:mt-0 ">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:lg:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark md:text-xs md:bg-transparent md:text-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />

        <Skill name="JAVASCRIPT " x="20vw" y="6vw" />
        <Skill name="REACTJS" x="0vw" y="12vw" />
        <Skill name="NEXTJS" x="-20vw" y="-15vw" />
        <Skill name="GATSBY" x="15vw" y="-12vw" />

        <Skill name="WEBDESIGN" x="32vw" y="-5vw" />
        <Skill name="FIGMA" x="0vw" y="-20vw" />

        <Skill name="FIREBASE" x="-25vw" y="18vw" />

        <Skill name="TAILWIND" x="18vw" y="18vw" />

        <Skill name="NODEJS" x="30vw" y="-18vw" />
        <Skill name="EXPRESS" x="40vw" y="10vw" />
        <Skill name="MONGODB" x="-40vw" y="10vw" />
        <Skill name="POSTGRESQL" x="-35vw" y="25vw" />
        <Skill name="GRAPHQL" x="30vw" y="25vw" />
      </div>
    </>
  );
};

export default Skills;
