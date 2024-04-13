import React from "react";
import logo from "./assets/logo.png";
import { IconButton, InputAdornment, MenuItem, TextField } from "@mui/material";
import search from "./assets/Search.png";
import rectangle from "./assets/Rectangle.png";
import Nexttable from "./Nexttable";
import Cards from "./Cards";
import "./nextpage.css";
import vector from "./assets/Vector.png";
import { Link } from "react-router-dom";
const NextPage = () => {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "Product Brand",
      label: "Product Brand",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const contents = [
    {
      title: "MRP",
      newprice: "₹ 99,999",
      oldprice: "₹ 99,999",
      difference: "99.99%",
    },
    {
      title: "MRP",
      newprice: "₹ 99,999",
      oldprice: "₹ 99,999",
      difference: "99.99%",
    },
    {
      title: "MRP",
      newprice: "₹ 99,999",
      oldprice: "₹ 99,999",
      difference: "99.99%",
    },
  ];

  return (
    <div className="h-screen w-[100vw]">
      <div className="flex justify-between px-[1rem]  border-[black] py-[0.5rem] sm:py-[0px] w-full shadow-xl">
        <div className="py-[0.5rem]">
          <img src={logo} alt="" className="w-[70%] sm:w-[25%]" />
        </div>
        <div className="flex flex-row sm:flex gap-[1.3rem] items-center mr-[1rem]">
          <Link to="/login">
            <p className="hover:cursor-pointer  bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text text-[18px] font-sans">
              Login
            </p>
          </Link>

          <Link to="/signup">
            <button className="bg-gradient-to-r from-[#83C44C] to-[#149C78] text-[white] w-[100px] shadow-xl">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[white] rounded-xl w-[96%] mx-auto mt-[0.8rem] ">
        <div className=" flex  mx-auto justify-between shadow-xl px-[1rem] py-[0.8rem] rounded-xl">
          <TextField
            id="searchbar"
            type="search"
            placeholder="Search Product"
            className="rounded-xl w-[70%] sm:w-[78%] bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text"
            data-text="Your Text Here"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton className="">
                    <img src={search} alt="" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button className="flex itms-center bg-gradient-to-r from-[#83C44C] to-[#149C78] py-[0.9rem] sm:w-[20%] text-[white] px-[0.6rem]  sm:mx-auto sm:px-[6rem] shadow-xl sm:mt-[0px] ">
            <div className="flex gap-[4px] items-center">
              <img src={vector} alt="" className="" />
              <p className="hidden sm:block text-[15px]">SEARCH</p>
              <p className=" sm:hidden text-[15px]">Search</p>
            </div>
          </button>
        </div>
        <div className="hidden sm:block py-[1.2rem]">
          <p className="text-[16px] bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text font-normal">
            CNS-WHT-959NS
          </p>
          <br />
          <p className="text-[22px] bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text font-bold">
            Wall Hung- WC With PP Soft Close Seat Cover
          </p>
        </div>
        <div className="flex py-[1rem] sm:py-[0px] flex-col sm:flex-row">
          <div className="sm:w-[24%] sm:mx-[0rem] mx-auto ">
            <img src={rectangle} alt="" className="sm:w-[95%] " />
          </div>
          <div className="sm:hidden py-[1.2rem] text-center">
            <p className="text-[17px] sm:text-[22px] text-center bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text font-bold">
              Wall Hung- WC With PP Soft Close Seat Cover
            </p>
            <p className="text-[14px] sm:text-[16px] text-center bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text font-normal">
              CNS-WHT-959NS
            </p>
            <br />
          </div>
          <div className=" w-[90%] mx-auto sm:mx-[0px] sm:w-[70%]">
            <div className="flex space-y-[1.4rem] sm:space-y-[0px] sm:flex-row flex-col  justify-between">
              {contents.map((content) => {
                return (
                  <Cards
                    title={content.title}
                    newprice={content.newprice}
                    oldprice={content.oldprice}
                    difference={content.difference}
                  />
                );
              })}
            </div>
            <div className="mt-[1.5rem] w-[100%] sm:w-[100%] mx-[0px] bg-[transparent]">
              <Nexttable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextPage;
