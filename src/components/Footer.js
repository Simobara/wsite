import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="flex py-8 items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <div className="flex items-center">
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            {/* &#9825; */}
          </span>
          {/* by&nbsp; */}
          <Link
            href="https://www.linkedin.com/in/siba2410"
            target="_blank"
            className="underline-offset-2 flex"
          >
            <Image
              src="/images/profile/Logo.png"
              alt="SB"
              width={40}
              height={40}
            />
            Design
          </Link>
        </div>
        <Link href="https://www.linkedin.com/in/siba2410" target="_blank">
          {/* Say hello */}
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
