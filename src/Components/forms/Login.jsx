import React from 'react'
import { useForm } from "react-hook-form";
import Header from "../header/Header";

const Login = () => {

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        axios
          .post(
            "http://localhost/api/dashboard-react/insertCandidate.php",
            data,
            { headers: { "Content-Type": "application/json" } }
          )
          .then(function (response) {
            //console.log(response.data)
            //console.log(response.status)
            //console.log(data)
            if (response.data === 23000) {
              alert("This ID Document has been already used");
            } else {
              alert("Register complete in TalentCore");
            }
          })
          .catch((error) => {
            console.log(error.data);
          });
      };
      
  return (
    <>
      <Header />
      <div className="w-[60%] m-auto text-center mb-12 pt-20 text-white">
        <h2 className="text-2xl font-semibold">Register Candidate</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[60%] m-auto grid grid-cols-3 gap-2"
      >
        <label
          htmlFor="email"
          className="flex flex-col text-[#b0b0b0] font-semibold col-span-2"
        >
          * Email
          <input
            type="email"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            id="email"
            placeholder="example@gmail.com"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email?.type === "required" && <EmptyField />}
        </label>

        <label
          htmlFor="password"
          className="flex flex-col text-[#b0b0b0] font-semibold"
        >
          * Password
          <input
            type="password"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            id="password"
            placeholder="************"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password?.type === "required" && <EmptyField />}
        </label>
        <input
          type="submit"
          className="w-full flex justify-center text-center p-2 rounded-md text-[#FFFFFF] bg-gradient-to-r from-purple-700 to-orange-600 font-semibold cursor-pointer"
        />
      </form>
    </>
  );
}

export default Login