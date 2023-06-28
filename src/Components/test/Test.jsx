import React from 'react'
import {useForm} from "react-hook-form"
import axios from 'axios'
import Header from '../header/Header';

function Test() {

  const {
    register,
    handleSubmit
    //formState: {errors}
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
          if(response.status === 200){
            alert("Candidato Ingresado")
          }
            
      })
      .catch(error => { console.log(error.data) });
      //console.log(data)
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
          className="flex flex-col text-white font-semibold"
        >
          * Document ID
          <input
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            type="text"
            id="documentId"
            placeholder="Your ID number"
            {...register("documentId")}
          />
        </label>

        <label
          htmlFor="name"
          className="flex flex-col text-white font-semibold"
        >
          * Name
          <input
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            type="text"
            id="name"
            placeholder="Your names"
            {...register("name")}
          />
        </label>

        <label
          htmlFor="lastName"
          className="flex flex-col text-white font-semibold"
        >
          * Last Name
          <input
            type="text"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            id="lastName"
            placeholder="Your last names"
            {...register("lastName")}
          />
        </label>

        <label
          htmlFor="email"
          className="flex flex-col text-white font-semibold col-span-2"
        >
          * Email
          <input
            type="email"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            id="email"
            placeholder="example@gmail.com"
            {...register("email")}
          />
        </label>

        <label
          htmlFor="password"
          className="flex flex-col text-white font-semibold"
        >
          * Password
          <input
            type="password"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            id="password"
            placeholder="************"
            {...register("password")}
          />
        </label>

        <label
          htmlFor="profession"
          className="flex flex-col text-white font-semibold"
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
          className="flex flex-col text-white font-semibold"
        >
          Upload your Photo
          <input
            type="file"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            id="photoCandidate"
            {...register("photoCandidate")}
          />
        </label>

        <label
          htmlFor="numberPhone"
          className="flex flex-col text-white font-semibold"
        >
          * Number Phone
          <input
            type="text"
            className="relative p-2 pl-4 rounded-lg m-2 outline-none border-none bg-[#292929] text-[#FFFFFF] font-normal"
            id="numberPhone"
            placeholder="+XX XXX XXX"
            {...register("numberPhone")}
          />
        </label>

          <input
            type="submit"
            className="w-full flex justify-center text-center p-2 rounded-md text-[#FFFFFF] bg-gradient-to-r from-purple-700 to-orange-600 font-semibold cursor-pointer"
          />
      </form>
    </>
  );
}

export default Test