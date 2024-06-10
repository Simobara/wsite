import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/Icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/ProjectsApp/ECommerce.png";
import project2 from "../../public/images/ProjectsApp/Chatpp.png";
import project3 from "../../public/images/ProjectsApp/Tool.png";
import project4 from "../../public/images/ProjectsApp/Portfolio.png";
import project5 from "../../public/images/ProjectsApp/Wea.png";
import project6 from "../../public/images/ProjectsApp/socialMedia.png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import {
  PageProjectLinkTitle1,
  PageProjectLinkTitle2,
  PageProjectLinkTitle3,
  PageProjectLinkTitle4,
  PageProjectLinkTitle5,
  PageProjectLinkTitle6,
  PageProjectSentence1,
  PageProjectsSentenceInside1,
  PageProjectsSentenceInside2,
  PageProjectsSentenceInside3,
  PageProjectsSentenceInside4,
  PageProjectsSentenceInside5,
  PageProjectsSentenceInside6,
  PageProjectsSentenceInsideTitle1,
  PageProjectsSentenceInsideTitle2,
  PageProjectsSentenceInsideTitle3,
  PageProjectsSentenceInsideTitle4,
  PageProjectsSentenceInsideTitle5,
  PageProjectsSentenceInsideTitle6,
} from "@/components/Sentences.js/Sentences";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type = "",
  title = "",
  summary = "",
  img = "",
  link = "",
  github = "",
}) => {
  return (
    <article className=" relative w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0  right-[-12px] -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs-text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <div className="w-10 dark:bg-dark rounded-full">
            <Link
              href={github}
              target="_blank"
              className="w-10 dark:bg-dark rounded-full"
            >
              <GithubIcon />
            </Link>
          </div>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark  p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:text-light dark:border-light dark:bg-dark p-6 relative  ">
      <div className="absolute top-0  right-[-12px] -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[100%] sm:h-[102%] xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Simobara | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={PageProjectSentence1}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={PageProjectsSentenceInsideTitle1}
                img={project1}
                summary={PageProjectsSentenceInside1}
                link={PageProjectLinkTitle1}
                github={PageProjectLinkTitle1}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={PageProjectsSentenceInsideTitle2}
                img={project2}
                summary={PageProjectsSentenceInside2}
                link={PageProjectLinkTitle2}
                github={PageProjectLinkTitle2}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={PageProjectsSentenceInsideTitle3}
                img={project3}
                summary={PageProjectsSentenceInside3}
                link={PageProjectLinkTitle3}
                github={PageProjectLinkTitle3}
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={PageProjectsSentenceInsideTitle4}
                img={project4}
                summary={PageProjectsSentenceInside4}
                link={PageProjectLinkTitle4}
                github={PageProjectLinkTitle4}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={PageProjectsSentenceInsideTitle5}
                img={project5}
                summary={PageProjectsSentenceInside5}
                link={PageProjectLinkTitle5}
                github={PageProjectLinkTitle5}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={PageProjectsSentenceInsideTitle6}
                img={project6}
                summary={PageProjectsSentenceInside6}
                link={PageProjectLinkTitle6}
                github={PageProjectLinkTitle6}
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
