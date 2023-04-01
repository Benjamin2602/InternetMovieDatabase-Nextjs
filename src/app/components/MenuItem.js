import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-red-600">
        {/* Icon is passed as a prop to the MenuItem
      So even though Icon is passed as a prop to the MenuItem component, 
      it can still be used as a component within the MenuItem component's output.
       */}
        <Icon className="text-2xl sm:hidden mx-4"/>
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
