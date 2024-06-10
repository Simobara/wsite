import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

import article0a from "../../public/images/articles/pagination component in reactjs.jpg";
import article0b from "../../public/images/articles/create loading screen in react js.jpg";

import article1 from "../../public/images/ProjectsArticles/StateManagement.png";
import article2 from "../../public/images/ProjectsArticles/CodeSplitting.png";
import article3 from "../../public/images/ProjectsArticles/Reusable.png";
import article4 from "../../public/images/ProjectsArticles/Framer.jpeg";
import article5 from "../../public/images/ProjectsArticles/APIInt.png";
import article6 from "../../public/images/ProjectsArticles/Auth.png";

import {
  PageArtSentence0,
  PageArtSentence01,
  PageArtSentence2,
  PageArtSentence3,
  PageArtSentence4,
  PageArtSentence5,
  PageArtSentenceInside1,
  PageArtSentenceInside2,
  PageArtSentenceInside3,
  PageArtSentenceInside4,
  PageArtSentenceInside5,
  PageArtSentenceInside6,
  PageArtSentenceInside7,
} from "@/components/Sentences.js/Sentences";

const FramerImage = motion(Image);

const MovingImg = ({ title = "", img = "", link = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-5);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline">
          {title}
        </h2>
        <FramerImage
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{ x: x, y: y }}
          initial={{ opacity: 0 }}
          ref={imgRef}
          src={img}
          alt={title}
          className=" z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        />
      </Link>
    </>
  );
};

const Article = ({ img = "", title = "", date = "", link = "" }) => {
  return (
    <>
      <motion.li
        initial={{ y: 200 }}
        whileInView={{
          y: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:text-dark dark:bg-light sm:flex-col"
      >
        {/* <Link href="" target={"_blank"}>
        <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
        </h2>
    </Link> */}
        <MovingImg title={title} img={img} link={link} />
        <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm mx-2">
          {date}
        </span>
      </motion.li>
    </>
  );
};

const FeaturedArticle = ({
  img = "",
  title = "",
  time = "",
  summary = "",
  link = "",
}) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:border-light dark:bg-dark dark:text-light">
      <div className="absolute top-0  right-[-12px] -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Simobara | Article Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden ">
        <Layout className="pt-16">
          <AnimatedText
            text={PageArtSentence01}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg-gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title={PageArtSentence3}
              time="9 min read"
              summary={PageArtSentence2}
              link="https://www.makeuseof.com/next-js-infinite-scrolling-pagination-tanstack-query/"
              img={article0a}
            />
            <FeaturedArticle
              title={PageArtSentence4}
              time="10 min read"
              summary={PageArtSentence5}
              link="https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-interview-questions"
              img={article0b}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
            {PageArtSentence0}
          </h2>
          <ul>
            <Article
              title={PageArtSentenceInside1}
              img={article1}
              date="Jan 2022"
              link="https://solguruz.com/blog/state-management-in-react/"
            />
            <Article
              title={PageArtSentenceInside2}
              img={article2}
              date="Apr 2021"
              link="https://www.xenonstack.com/insights/code-splitting-in-react"
            />
            <Article
              title={PageArtSentenceInside3}
              img={article3}
              date="Jul 2023"
              link="https://www.freecodecamp.org/news/how-to-build-reusable-react-components/"
            />
            <Article
              title={PageArtSentenceInside4}
              img={article4}
              date="Nov 2020"
              link="https://medium.com/@shrutisonani28/animations-in-react-with-framer-motion-e2a6658f09c9"
            />
            <Article
              title={PageArtSentenceInside6}
              img={article6}
              date="Sep 2022"
              link="https://www.ory.sh/oauth2-for-mobile-app-spa-browser/"
            />
            <Article
              title={PageArtSentenceInside5}
              img={article5}
              date="Feb 2024"
              link="https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/"
            />
            {/* <Article
              title={PageArtSentenceInside7}
              img={article9}
              date="Dic 2021"
              link="/"
            /> */}
          </ul>
        </Layout>
      </main>
    </>
  );
};
export default articles;
