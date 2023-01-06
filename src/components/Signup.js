import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const saveData = {
  name: "dani",
  email: "thisistest@gmail.com",
  phoneNumber: "09904567787",
  password: "12345678",
  confirmPassword: "12345678",
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

const Signup = () => {
  const onSubmit = (val) => {
    axios
      .post("", val)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("")
      .then((res) => setFormValue(res.data))
      .catch((err) => console.log(err.message));
  }, []);

//   const validate = (val) => {
//     const errors = {};
//     if (!val.name) {
//       errors.name = "name in required";
//     }
//     if (!val.email) {
//       errors.email = "email in required";
//     }
//     if (!val.password) {
//       errors.password = "password in required";
//     }
//     return errors;
//   };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("invalid Email format")
      .required("Email is required"),
    password: Yup.string()
      .required("password is required")
      .min(8, "minimum 8 cahr"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]{11}$/, "invalid phone number"),
    confirmPassword: Yup.string()
      .required("password confirm invalid")
      .oneOf([Yup.ref("password"), null], "password must matches")
      .nullable(),
    gender: Yup.string().required("Gender is required"),
    nationality: Yup.string().required("Nationality is required"),
    marriage: Yup.array().max(1).required("Marriage is required"),
  });

  const [formValue, setFormValue] = useState(null);
  const formik = useFormik({
    initialValues: formValue || initialValues,
    onSubmit,
    // validate,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="flex dark:bg-slate-800 bg-slate-200 rounded h-screen justify-center items-center">
      <form onSubmit={formik.handleSubmit} className="flex justify-center items-center flex-col dark:bg-slate-600 p-10 rounded-lg shadow-md shadow-violet-500">
        <h1 className="text-2xl text-violet-400 font-bold">Signup</h1>
        <div className="flex text-violet-400 flex-col">
          <label>Name</label>
          <input
            className="text-black"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            id="name"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="text-black bg-red-500 mt-1 rounded">
              {formik.errors.name}
            </div>
          )}
        </div>
        <div className="flex text-violet-400  flex-col">
          <label>Email</label>
          <input
            className="text-black"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            id="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-black bg-red-500 mt-1 rounded">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="flex flex-col text-violet-400 ">
          <label>Password</label>
          <input
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            className="text-black"
            id="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-black bg-red-500 mt-1 rounded">
              {formik.errors.password}
            </div>
          )}
        </div>
        <div className="flex flex-col text-violet-400 ">
          <label>confirm Password</label>
          <input
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            className="text-black"
            id="confirmPassword"
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div className="text-black bg-red-500 mt-1 rounded">
              {formik.errors.confirmPassword}
            </div>
          )}
        </div>
        <div className="flex flex-col text-violet-400 ">
          <label>phoneNumber</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            className="text-black"
            id="phoneNumber"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className="text-black bg-red-500 mt-1 rounded">
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>
        {/* formik.isValid === validateOnMount => its for realtime validation */}
        <button onClick={() => setFormValue(saveData)}>load</button>
        <button
          type="submit"
          disabled={!formik.isValid}
          className="bg-slate-800 cursor-pointer text-violet-300 p-1 px-2 mt-5 rounded-md"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
