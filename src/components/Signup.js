import axios from "axios";
import { useState } from "react";
// banner
import bannerDark from "../assets/bannerDark.jpg";
import bannerLight from "../assets/bannerLight.jpg";

const Signup = ({ theme }) => {
  //data state
  const [data, setData] = useState({
    user_usname: "",
    user_email: "",
    user_password: "",
    user_phone_number: "",
  });
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };
  const onSubmit = () => {
    axios
      .post("http://localhost:8000/api/adduser/", {
        user_usname: data.user_usname,
        user_email: data.user_email,
        user_password: data.user_password,
        user_phone_number: data.user_phone_number,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err, "error dari"));
  };
  //Regex
  const patterns = {
    name: /^[ A-Za-z]{3,12}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w#?!@$:.<>+=,%^&[*-_.;{}()[]{7,19}$/,
    phoneNumber: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
  };
  //validation
  const validate = (field, regex) => {
    if (field.target.value) {
      if (regex.test(field.target.value)) {
        field.target.className = "valid";
      } else {
        field.target.className = "invalid";
      }
    } else {
      field.target.className = "";
    }
  };
  //does it complete?
  const isEnable =
    data.user_usname.length > 0 &&
    data.user_phone_number.length > 0 &&
    data.user_email.length > 0 &&
    data.user_password.length > 0;
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
        <div className="flex dark:text-violet-200 text-violet-400 flex-col">
          <label>Name</label>
          <input
            className="bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 from-green-200 to-blue-300 text-violet-700 dark:text-white"
            name="user_usname"
            type="text"
            value={data.user_usname}
            onChange={changeHandler}
          />
          {/* error */}
          {/* <div className="dark:text-violet-300 text-slate-600 absolute mt-6 ml-2">
            name must contain 3 - 12 characters and A-Z
          </div> */}
        </div>
        <div className="flex dark:text-violet-200 text-violet-400 flex-col">
          <label>Email</label>
          <input
            className="bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 from-green-200 to-blue-300 text-violet-700 dark:text-white"
            name="user_email"
            type="email"
            value={data.user_email}
            onChange={changeHandler}
          />
          {/* <div className="dark:text-violet-300 text-slate-600 absolute mt-6 ml-2">
            Email must be a valid email address.
          </div> */}
        </div>
        <div className="flex flex-col dark:text-violet-200 text-violet-400">
          <label>Password</label>
          <input
            type="password"
            name="user_password"
            value={data.user_password}
            onChange={changeHandler}
            className="bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 from-green-200 to-blue-300 text-violet-700 dark:text-white"
          />
          {/* <div className="dark:text-violet-300 text-slate-600 absolute mt-6 ml-2">
            Password must be 8 - 20 characters
          </div> */}
        </div>
        <div className="flex flex-col dark:text-violet-200 text-violet-400">
          <label>confirm Password</label>
          <input
            type="password"
            onChange={e=>e.target.value}
            className="bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 from-green-200 to-blue-300 text-violet-700 dark:text-white"
          />
          {/* <div className="dark:text-violet-300 text-slate-600 absolute mt-6 ml-2">
            Password must be confirm
          </div> */}
        </div>
        <div className="flex flex-col dark:text-violet-200 text-violet-400">
          <label>phoneNumber</label>
          <input
            type="text"
            name="user_phone_number"
            value={data.user_phone_number}
            onChange={changeHandler}
            className="bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 from-green-200 to-blue-300 text-violet-700 dark:text-white"
          />
          {/* <div className="dark:text-violet-300 text-slate-600 absolute mt-6 ml-2">
            phone id requirment
          </div> */}
        </div>
        <button
          type="submit"
          disabled={!isEnable}
          onClick={onSubmit}
          className="bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 from-green-400 to-blue-500 cursor-pointer dark:text-violet-200 text-violet-50 p-1 px-2 mt-5 rounded-md"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
