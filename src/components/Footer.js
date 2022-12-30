import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {AiOutlineGithub} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-slate-300 dark:bg-slate-900">
        {/* about */}
      <div className="md:w-[50%]">
        <p className="text-violet-500 text-justify p-3">
          Amazon is guided by four principles: customer obsession rather than
          competitor focus, passion for invention, commitment to operational
          excellence, and long-term thinking. Amazon strives to be Earths most
          customer-centric company, Earths best employer, and Earths safest
          place to work. Customer reviews, 1-Click shopping, personalized
          recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct
          Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo,
          Alexa, Just Walk Out technology, Amazon Studios, and The Climate
          Pledge are some of the things pioneered by Amazon.
        </p>
      </div>
      {/* icons */}
      <div className="flex flex-row text-3xl justify-around md:w-[20%] w-full text-violet-500 dark:text-violet-600">
        <AiFillInstagram className="cursor-pointer"/>
        <AiOutlineGithub className="cursor-pointer"/>
        <MdEmail className="cursor-pointer"/>
        <BsLinkedin className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Footer;
