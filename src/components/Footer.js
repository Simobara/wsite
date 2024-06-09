import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className=" flex py-8 items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <div className="flex items-center">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="www.linkedin.com/in/siba2410"
            target={"_blank"}
            className="underline-offset-2"
          >
            SB
          </Link>
        </div>
        <Link href="www.linkedin.com/in/siba2410" target={"_blank"}>
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
