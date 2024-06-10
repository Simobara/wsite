import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] flex flex-col mx-auto items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-lg xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light md:text6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="[w-75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-[10px] w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        ></motion.div>
        <ul className="w-full flex-flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer"
            company="Facebook"
            companyLink="www.facebook.com"
            time="2021-Present"
            address="Menlo Park, CA"
            work="Worked on the user interface team to enhance the user experience of Facebook's web platform, including developing and implementing new UI components, optimizing performance, and ensuring compatibility across multiple devices and browsers."
          />
          <Details
            position="Backend Developer"
            company="Amazon"
            companyLink="www.amazon.com"
            time="2019-2021"
            address="Seattle, WA"
            work="Part of the backend services team, focused on developing scalable APIs and services for Amazon's e-commerce platform. Improved database performance, integrated third-party services, and ensured high availability and fault tolerance."
          />
          <Details
            position="DevOps Engineer"
            company="Netflix"
            companyLink="www.netflix.com"
            time="2020-2023"
            address="Los Gatos, CA"
            work="Implemented and managed continuous integration and delivery pipelines for Netflix's streaming service. Automated deployment processes, monitored system performance, and worked on infrastructure as code (IaC) using tools like Terraform and Kubernetes."
          />
          <Details
            position="Data Scientist"
            company="Microsoft"
            companyLink="www.microsoft.com"
            time="2018-2020"
            address="Redmond, WA"
            work="Analyzed large datasets to provide insights for various Microsoft products. Developed machine learning models to predict user behavior, enhanced data processing pipelines, and collaborated with product teams to integrate data-driven solutions."
          />
          <Details
            position="Mobile Application Developer"
            company="Apple"
            companyLink="www.apple.com"
            time="2017-2019"
            address="Cupertino, CA"
            work="Developed and maintained iOS applications for the Apple ecosystem. Implemented new features, improved application performance, and ensured seamless integration with Apple's hardware and software platforms."
          />
          <Details
            position="Full Stack Developer"
            company="Spotify"
            companyLink="www.spotify.com"
            time="2021-Present"
            address="Stockholm, Sweden"
            work="Worked on the development of Spotify's music streaming platform, focusing on both frontend and backend components. Built new features, optimized existing services, and collaborated with cross-functional teams to deliver high-quality user experiences."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
