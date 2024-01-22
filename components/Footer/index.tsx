import Link from "next/link";
import React from "react";

const phoneSvg = (
  <svg
    viewBox="0 0 24 24"
    height={35}
    width={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
        stroke="#0f4d45"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
    </g>
  </svg>
);

const emailSvg = (
  <svg
    height="35px"
    width="35px"
    version="1.1"
    id="_x32_"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="#0f4d45"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <style type="text/css"> </style>{" "}
      <g>
        {" "}
        <path d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009 c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067 c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745 c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51 c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05 c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104 c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929 c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443 c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925 l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244 c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16 c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572 c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"></path>{" "}
      </g>{" "}
    </g>
  </svg>
);

const Footer = () => {
  const todayDate = new Date().getFullYear();

  return (
    <div>
      <div
        className={`flex flex-col justify-center mx-auto px-10 lg:px-32 py-10 w-full h-fit bg-primary/80`}
      >
        <div className={`w-fit flex flex-col justify-center mx-auto`}>
          {/* Logo */}
          <Link href="/">
            <p
              className="h-full w-fit text-2xl font-bold font-gulzar bg-gradient-to-r from-third via-white to-third text-transparent
            bg-clip-text py-5 flex items-center justify-center mx-auto mb-5"
            >
              د. سعيد الشبلي
            </p>
          </Link>

          {/* Contact me */}
          <div className={`flex flex-col gap-5`}>
            {/* Phone Number */}
            <div className={`flex flex-col justify-center mx-auto`}>
              <p className={`text-white text-2xl flex flex-col text-center`}>
                <span className={`mx-auto`}>{phoneSvg}</span>
                رقم الهاتف
              </p>
              <p className={`text-third text-2xl`}>0090123456789</p>
            </div>

            {/* Email number */}
            <div className={`flex flex-col justify-center mx-auto`}>
              <p className={`text-white text-2xl flex flex-col text-center`}>
                <span className={`mx-auto`}>{emailSvg}</span>
                البريد الإلكتروني
              </p>
              <p className={`text-third text-2xl`}>example@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <p
        className={`flex justify-center text-gray-200 mx-auto rtl bg-primary/80 pb-1 w-full text-sm font-light`}
      >
        تصميم و تطوير
        <Link
          href="https://portfolio-anasss777.vercel.app/"
          className={`text-[#0f4d45] font-normal hover:font-bold transition-all duration-300 ease-linear`}
        >
          &nbsp;Anas Chammam&nbsp;
        </Link>
        {todayDate}©
      </p>
    </div>
  );
};

export default Footer;
