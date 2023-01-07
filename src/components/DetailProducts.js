import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const DetailProducts = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:00"); // If you try to remove this line the // updating of timer Variable will be // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date(); // This is where you need to adjust if // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 900000);
    return deadline;
  }; // We can use useEffect so that when the component // mount the timer will start as soon as possible // We put empty array to act as componentDid // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
    window.scrollTo(0, 0);
  }, []); // Another way to call the clearTimer() to start // the countdown is via action event from the // button first we create function to be called // by the button

  const id = useParams();
  const data = useSelector((state) => state.productsState.products);
  const prod = data[id.id - 5];
  return (
    <div className="h-screen pt-20 dark:bg-slate-800 bg-slate-200 flex flex-col justify-center">
      <div key={prod.id}>
        <div className="flex md:flex-row flex-col items-center justify-center md:justify-around px-5">
          {/* img */}
          <div className="w-[50%]">
            <img src={prod.product_image} alt={prod.product_title} />
          </div>

          {/* offer delay */}
          <div className="relative bg-violet-500 rounded-md shadow-md px-10  text-white bottom-[25%] left-[10%] -rotate-45">
            {timer}
          </div>
          {/* add to card */}
          <div className="w-[30rem] dark:text-violet-400 text-violet-600 h-[20rem] bg-slate-300 rounded-lg shadow-md dark:bg-slate-700 flex flex-col items-center justify-evenly">
            {/* detail */}
            <h1 className="font-bold md:text-xl">{prod.product_title}</h1>
            <span>{prod.product_availability} available</span>
            <p className="font-bold">Price :{prod.product_price} $</p>
            <button className="bg-violet-500 text-white px-2 w-32 rounded-md hover:delay-300 hover:w-36 hover:transition duration-300">
              Add to Card
            </button>
          </div>
        </div>
        {/* product detail */}
        <div className="flex flex-col justify-center items-center mx-20 rounded-md shadow-md bg-slate-300 dark:bg-slate-700">
          <p className="text-violet-600 dark:text-violet-300 font-bold">
            Display: <span>{prod.product_display}</span>
          </p>
          <p className="text-violet-600 dark:text-violet-300 font-bold">
            Resoloution: <span>{prod.product_resoloution}</span>
          </p>
          <p className="text-violet-600 dark:text-violet-300 font-bold">
            Size: <span>{prod.product_size}</span>
          </p>
          <p className="text-violet-600 dark:text-violet-300 font-bold">
            OS: <span>{prod.product_os}</span>
          </p>
        </div>
        {/* comments */}
        <div></div>
      </div>
    </div>
  );
};

export default DetailProducts;
