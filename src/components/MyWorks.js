import React from "react";
import img1 from "../Assets/1.png";
import img2 from "../Assets/2.png";
import img3 from "../Assets/3.png";
import img4 from "../Assets/4.png";
import img5 from "../Assets/5.png";
import img6 from "../Assets/6.png";
import ecommerce from "../Assets/ecommerce.jpeg";
import Netflix from "../Assets/Netflix.jpeg";
import usermanagement from "../Assets/usermanagement.jpeg";
import cleanmyinbox from "../Assets/cleanmyinbox.webp";
import engageIQ from "../Assets/engageIQ.png";
import inboxmanagement from "../Assets/inboxmanagement.jpeg";
import nodejs_cover from "../Assets/nodejs_cover.png";
import OTPvalidatopn from "../Assets/OTPvalidatopn.png";

import netflix from "../Assets/netflix.png";
import Todo from "../Assets/Todo.png";
import github from "../Assets/github.png";
import workbg from "../Assets/work-bg.png";
import Slider from "react-slick";

const projectData = [
  {
    id: 1,
    img1: ecommerce,
    title: "Django-E-Commerce-Website",
    href: "https://github.com/JeemonGeorge/Python-Django-E-Commerce-Website/tree/main/ModernGrid",
    desc: "Modern Finds is a sleek e-commerce website built using Python Django and JavaScript, offering a secure and efficient platform for managing products, users, and orders. With its interactive interface and responsive design, it provides a seamless shopping experience for customers and easy management tools for administrators.",
  },
  {
    id: 2,
    img1: OTPvalidatopn,
    title: "User Creation with OTP Validation",
    href: "https://github.com/JeemonGeorge/OTP-Gmail-Notification-Django",
    desc: "A Django-based user creation system with OTP validation ensures secure registration by sending a one-time password to the user's email for verification. Integrated with Gmail notifications, it provides real-time alerts and confirmations during the registration process.",
  },
  {
    id: 3,
    img1: nodejs_cover,
    title: "User-Authentication-Using-Node-js",
    href: "https://github.com/JeemonGeorge/User-Authentication-Using-Node-js",
    desc: "A secure user authentication system built with Node.js, featuring efficient login and registration with token-based verification.",
  },
  {
    id: 4,
    img1: Netflix,
    title: "Netflix-Clone",
    href: "https://github.com/JeemonGeorge/React-Project-/tree/main/netflix_clone-main",
    desc: "A Netflix clone built with React.js, offering a sleek interface to browse, search, and stream movies and TV shows. It features dynamic content rendering and seamless user interactions.",
  },
  {
    id: 5,
    img1: img5,
    title: "io-chat-node js",
    href: "https://github.com/JeemonGeorge/socket-io-node-js-",
    desc: "I led a Node.js project integrating Socket.IO for a real-time chat application, spotlighting my expertise in harnessing innovative technologies to create interactive and seamless communication platforms",
  },
  {
    id: 6,
    img1: usermanagement,
    title: "User MAnagemnet Mern-Stack ",
    href: "https://github.com/JeemonGeorge/Mern-Stack-Project",
    desc: "A MEARN stack application for user registration, event management, and employee details, built with React, Node.js, and styled using Bootstrap and Tailwind CSS.",
  },
  {
    id: 7,
    img1: engageIQ,
    title: "Engage-IQ",
    href: "###",
    desc: "The Engage IQ project is an employee management system developed using Python Django, designed to streamline employee data management, track performance, and handle administrative tasks. It features secure user authentication, role-based access, and efficient handling of employee records, providing an intuitive platform for managing employee details and organizational workflows.",
  },
  {
    id: 8,
    img1: cleanmyinbox,
    title: "CleanmyInbox",
    href: "####",
    desc: "The Clean My Inbox project is a Python Django application that integrates with both MS Outlook and Gmail to display and manage emails within a single platform. It allows users to organize their inboxes by applying custom rules for filtering, categorizing, and managing incoming emails efficiently.",
  },
  {
    id: 8,
    img1: inboxmanagement,
    title: "InboxManagement",
    href: "###",
    desc: "The Inbox Management project is a Python Django application designed to streamline the management of emails from multiple sources, such as Gmail and MS Outlook. It provides a unified platform where users can access, organize, and process their emails based on customizable rules and filters. The application supports features like email categorization, labeling, automatic archiving, and deletion based on user-defined criteria, ensuring a more efficient and organized inbox. With secure integration with email providers, users can manage both personal and professional emails seamlessly from a single interface, enhancing productivity and simplifying email management.",
  },

];

function MyWorks() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "black",
          borderRadius: "15px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "black",
          borderRadius: "15px",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="font-serif h-full" id="work">
      <div >
        <p className="md:text-2xl pl-8 md:pl-4 lg:pr-4 tracking-widest md:pt-[50px] md:ml-14 font-bold text-start md:mb-4">
          My Works
        </p>
        <div className="flex lg:justify-center md:m-8">
          <p className="font-bold md:text-4xl lg:text-5xl text-lg sm:text-lg pl-3 md:pl-4 pl-8">
            In every task, my essence breathes its tale.
          </p>
        </div>
        <div className="flex flex-col justify-center m-4">
          <div className="container m-auto ">
            <Slider {...settings}>
              {projectData.map((work) => (
                <div
                  key={work.id}
                  className="border-4 text-white shadow rounded-2xl bg-gray-500 "
                  style={{ backgroundImage: `url(${workbg})` }}
                >
                  {/* headeing section */}
                  <div className="flex items-center justify-between pr-4">
                    <p className="font-extrabold text-xl p-5">{work.title}</p>
                    <a href={work.href}>
                      <img
                        src={github}
                        alt=""
                        className="w-6 h-6 bg-transparent hover:w-8 hover:h-8 hover:bg-yellow-500 rounded-full"
                      />
                    </a>
                  </div>
                  {/* ---------------- */}

                  {/* hover desc */}
                  <div className="relative">
                    <img
                      src={work.img1}
                      alt=""
                      className="h-[200px] w-full rounded-b-2xl"
                    />
                    <div className="absolute rounded-b-xl top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gray-900 bg-opacity-85 flex justify-center items-center">
                      <p className="text-white text-justify p-2">{work.desc}</p>
                    </div>
                  </div>
                  {/* ---------- */}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;

