import axios from "axios";
import { useState } from "react";
// banner
import bannerDark from "../assets/bannerDark.jpg";
import bannerLight from "../assets/bannerLight.jpg";
//alert
import Swal from "sweetalert2";
//css
import "./Validation.css";
const Signup = ({ theme }) => {
  //data state
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const axiosData = JSON.stringify({
    user_usname: data.username,
    user_email: data.email,
    user_password: data.password,
    user_phone_number: data.phoneNumber,
  });

  const postHandler = () => {
    axios
      .post("http://localhost:8000/api/adduser/", axiosData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(
        (res) =>
          res.data &&
          Swal.fire({
            icon: "success",
            title: "Good Job",
            text: "You have Joined Us!",
            width: "20rem",
          })
      )
      .catch(
        (err) =>
          err.message &&
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            width: "20rem",
          })
      );
  };
  //Regex
  const patterns = {
    name: /^[ A-Za-z]{3,12}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w#?!@$:.<>+=,%^&[*-_.;{}()[]{7,19}$/,
    phoneNumber: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
  };
  //validation
  const validate = (event, regex) => {
    if (event.target.value) {
      if (regex.test(event.target.value)) {
        event.target.className = "valid";
      } else {
        event.target.className = "invalid";
      }
    } else {
      event.target.className = "";
    }
  };
  //does it complete?
  const isEnable =
    data.username.length > 0 &&
    data.phoneNumber.length > 0 &&
    data.email.length > 0 &&
    data.password.length > 0;
  return (
    <div className="flex w-full bg-slate-200 rounded h-full justify-center items-center">
      {/* banner */}
      <div>
        <img
          src={!theme ? bannerDark : bannerLight}
          alt="banner"
          className="min-h-[60rem]"
        />
      </div>
      {/* forms */}
      <form
        method="post"
        id="form"
        className="flex absolute backdrop-filter backdrop-opacity-90 backdrop-blur-md backdrop-contrast-200 justify-center items-center flex-col  p-10 rounded-lg shadow-md shadow-violet-500"
      >
        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 from-green-500 to-blue-500 font-bold">
          Signup
        </h1>
        <div className="flex flex-col">
          <label className="dark:text-violet-200 text-violet-400">Name</label>
          <input
            name="username"
            type="text"
            value={data.username}
            onChange={(event) =>
              validate(event, patterns.name, setData({ ...data, [event.target.name]: event.target.value }))
            }
          />
          {/* error */}
          <p className="text-violet-300 absolute mt-14 px-1 bg-violet-100">
            must contain 3 - 12 characters
          </p>
        </div>
        <div className="flex dark:text-violet-200 text-violet-400 flex-col">
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={data.email}
            onChange={(event) =>
              validate(event, patterns.email, setData({ ...data, [event.target.name]: event.target.value }))
            }
          />
          <p className="text-violet-300 absolute mt-14 px-1 bg-violet-100">
            Email must be valid.
          </p>
        </div>
        <div className="flex flex-col dark:text-violet-200 text-violet-400">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={(event) => validate(setData({ ...data, [event.target.name]: event.target.value }), patterns.password, event)}
          />
          <p className="text-violet-300 absolute mt-14 px-1 bg-violet-100">
            Password must be 8 - 20 characters
          </p>
        </div>
        <div className="flex flex-col dark:text-violet-200 text-violet-400">
          <label>confirm Password</label>
          <input
            type="password"
            onChange={(event) => validate(setData({ ...data, [event.target.name]: event.target.value }), patterns.password, event)}
          />
          <p className="text-violet-300 absolute mt-14 px-1 bg-violet-100">
            Password must be confirm
          </p>
        </div>
        <div className="flex flex-col dark:text-violet-200 text-violet-400">
          <label>phoneNumber</label>
          <input
            type="tel"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={(event) =>
              validate(event, patterns.phoneNumber, setData({ ...data, [event.target.name]: event.target.value }))
            }
          />
          <p className="text-violet-300 absolute mt-14 px-1 bg-violet-100">
            phone is requirment
          </p>
        </div>
        <button
          type="button"
          disabled={!isEnable}
          onClick={postHandler}
          className="bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 from-green-400 to-blue-500 cursor-pointer dark:text-violet-200 text-violet-50 p-1 px-2 mt-5 rounded-md"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
