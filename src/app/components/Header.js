import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto
    items-center py-6">
      {/* left side of the header  */}
      <div className="flex">
        {/*
       adding attributes to the jsx element
       react collects the attributes and puts them in an object
       props object should be passed to the component as arguments
       */}
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoSquareFill} />
      </div>

      {/* right side of the header  */}
      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
          <span className="font-bold bg-red-400 py-1 px-2 rounded-lg mr-1">IMDb</span>
          <span className="text-xl hidden sm:inline">clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
