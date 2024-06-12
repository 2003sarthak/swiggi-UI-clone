import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1, CiShoppingCart } from "react-icons/ci";
import { IoMdHelpBuoy } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

export default function Header() {
  const [toggleMode, settoggleMode] = useState(false);
  const showsidemenu = () => {
    settoggleMode(!toggleMode);
  };
  const hideSideMenu = () => {
    settoggleMode(false);
  };
  const links = [
    {
      icon: <IoSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Discount",
      sup: "New",
    },
    {
      icon: <IoMdHelpBuoy />,
      name: "Help",
    },
    {
      icon: <FaRegUser />,
      name: "Sign In",
    },
    {
      icon: <CiShoppingCart />,
      name: "Cart",
      sup: 0,
    },
  ];
  return (
    <>
      <div
        className={`back-overlay w-full h-full fixed duration-500 z-[9998] ${
          toggleMode ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={hideSideMenu}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-[300px] sm:w-[500px] bg-white h-full absolute duration-[400ms] z-[9999] ${
            toggleMode ? "left-0" : "-left-[300px] sm:-left-[500px]"
          }`}
        ></div>
      </div>
      <header className="p-3 shadow-xl text-[#686b78] sticky top-0 bg-white z-[9997]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[120px]">
            <svg
              className="_8pSp-"
              viewBox="0 0 559 825"
              height="49"
              width="34"
              fill="#fc8019"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                fill="url(#paint0_linear_19447_66107)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_19447_66107"
                  x1="445.629"
                  y1="63.8626"
                  x2="160.773"
                  y2="537.598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF993A"></stop>
                  <stop offset="1" stopColor="#F15700"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-[black]">
              Pratap Nagar
            </span>{" "}
            Agra, Uttar Pradesh, India{" "}
            <RxCaretDown
              onClick={showsidemenu}
              className="font-bold inline text-[#fc8019] text-[1.2rem] cursor-pointer"
            />
          </div>
          <nav className="hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#fc8019] flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                  <sup className="text-[#fc8019]">{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
