import React from "react";
import { heroLinks } from "../../constants/data";
import { Link } from "react-router-dom";

// import "./HeroSection.css";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

const Header = () => {
  return (
    <div className="hero-wrapper flex flex-col items-center mt-6">
      <h1 className="slogan lg:text-7xl sm:text-6xl text-4xl text-center dark:text-neutral-300 tracking-wide text-neutral-700">
        AceDot Build Tools
        {/* 이스테이프 문자 참조 : https://taemssssss.tistory.com/23#google_vignette*/}
        <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
          &nbsp; for Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi delectus
        accusantium reprehenderit repellendus dolore sunt beatae asperiores nam
        minus voluptatum, quasi facilis sapiente, architecto cum, numquam optio
        dolorum. Nemo, sint. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Unde, eaque excepturi sit neque, magnam eius itaque atque
        voluptatum laudantium sequi vel voluptas harum! Quisquam blanditiis quam
        enim quia pariatur eum. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Repellendus magnam laborum nam, assumenda eveniet quis
        accusamus voluptas recusandae aperiam quisquam nulla eligendi molestias
        sed sapiente perspiciatis in ut quo iure. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Possimus necessitatibus vero ad similique
        vitae hic, deserunt rerum autem aperiam blanditiis quo minima dicta ex
        corrupti vel voluptas unde fugiat! Asperiores?
      </p>
      <div className="sub-links mt-10 flex gap-3">
        {heroLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="py-[0.75rem] px-[1.5rem] border text-neutral-400"
          >
            {link.text}
          </Link>
        ))}
      </div>

      <div className="video-wrapper flex flex-col gap-2 md:flex-row mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-indigo-800 shadow-indigo-400 my-auto mx-auto md:my-4 md:mx-2"
        >
          <source src={video2} type="video/mp4" />
          현재 브라우저는 영상을 제공하지 않습니다.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-indigo-800 shadow-indigo-400 my-auto mx-auto md:my-4 md:mx-2"
        >
          <source src={video1} type="video/mp4" />
          현재 브라우저는 영상을 제공하지 않습니다.
        </video>
      </div>
    </div>
  );
};

export default Header;
