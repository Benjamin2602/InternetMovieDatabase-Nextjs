"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      {/* genre comes near the localhost 
    here i used template literals using backtick */}
      <Link
    //   dynamic styling is used here using template literals
    //if genre == param na then underline and decoration will be applied
        className={`m-4 hover:text-red-600 font-semibold p-1
    ${
      genre &&
      genre === param &&
      "underline underline-offset-8 decoration-4 decoration-pink-500 rounded-lg"
    }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
