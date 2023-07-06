import React from 'react'
import {useForm} from "react-hook-form"
import axios from 'axios'
import Header from '../header/Header';
import EmptyField from './EmptyField';

function Test() {

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = data => {
    axios
      .post(
        'http://localhost/api/dashboard-react/insertCandidate.php',
        data,
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(function(response) {
        //console.log(response.data)
        //console.log(response.status)
        //console.log(data)
        if (response.data === 23000) {
          alert("This ID Document has been already used");
        }else{
          alert("Register complete in TalentCore");
        }
      })
      .catch(error => { console.log(error.data) });

  }

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
          htmlFor="documentId"
          className="flex flex-col text-[#b0b0b0] font-semibold"
        >
          * Document ID
          <input
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            type="text"
            id="documentId"
            placeholder="Your ID number"
            {...register("documentId", {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: "This field only admits numbers",
              },
            })}
          />
          {errors.documentId?.type === "required" && <EmptyField />}
          {errors.documentId?.type === "pattern" && (
            <span className="mb-4 mt-1 pl-2 text-red-500 text-sm">
              {errors.documentId?.message}
            </span>
          )}
        </label>

        <label
          htmlFor="name"
          className="flex flex-col text-[#b0b0b0] font-semibold"
        >
          * Name
          <input
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            type="text"
            id="name"
            placeholder="Your names"
            {...register("name", {
              required: true,
              pattern: {
                value: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
                message: "This field only admits letters",
              },
            })}
          />
          {errors.name?.type === "required" && <EmptyField />}
          {errors.name?.type === "pattern" && (
            <span className="mb-4 mt-1 pl-2 text-red-500 text-sm">
              {errors.name?.message}
            </span>
          )}
        </label>

        <label
          htmlFor="lastName"
          className="flex flex-col text-[#b0b0b0] font-semibold"
        >
          * Last Name
          <input
            type="text"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            id="lastName"
            placeholder="Your last names"
            {...register("lastName", {
              required: true,
              pattern: {
                value: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
                message: "This field only admits letters",
              },
            })}
          />
          {errors.lastName?.type === "required" && <EmptyField />}
          {errors.lastName?.type === "pattern" && (
            <span className="mb-4 mt-1 pl-2 text-red-500 text-sm">
              {errors.lastName?.message}
            </span>
          )}
        </label>

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

        <label
          htmlFor="profession"
          className="flex flex-col text-[#b0b0b0] font-semibold"
        >
          Profession
          <input
            type="text"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            id="profession"
            placeholder="Example: Developer"
            {...register("profession")}
          />
        </label>

        <label
          htmlFor="photoCandidate"
          className="flex flex-col text-[#b0b0b0] font-semibold"
        >
          Upload your Photo
          <input
            type="file"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] file:text-[#b0b0b0] font-normal file:border-0 file:bg-transparent file:cursor-pointer cursor-pointer"
            id="photoCandidate"
            {...register("photoCandidate")}
          />
        </label>

        <label
          htmlFor="numberPhone"
          className="flex flex-col text-[#b0b0b0] font-semibold"
        >
          * Number Phone
          <input
            type="text"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            id="numberPhone"
            placeholder="+XX XXX XXX"
            {...register("numberPhone", {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: "This field only admits numbers",
              },
            })}
          />
          {errors.numberPhone?.type === "required" && <EmptyField />}
          {errors.numberPhone?.type === "pattern" && (
            <span className="mb-4 mt-1 pl-2 text-red-500 text-sm">
              {errors.numberPhone?.message}
            </span>
          )}
        </label>
        <span className="col-span-3 text-[#b0b0b0] mb-4 mt-2">
          * This fields are obligatory
        </span>
        <input
          type="submit"
          className="w-full flex justify-center text-center p-2 rounded-md text-[#FFFFFF] bg-gradient-to-r from-purple-700 to-orange-600 font-semibold cursor-pointer"
          
        />
      </form>
    </>
  );
}

export default Test