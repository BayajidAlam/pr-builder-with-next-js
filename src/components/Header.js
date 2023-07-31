import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between lg:container w-[95%] mx-auto py-2">
      <p className="text-black text-3xl font-bold">Next Pc</p>
      <div className="flex gap-16 items-center">

        <div className="relative group ">
          <Link className="text-xl font-bold" href="/category">Categories</Link>
          <ul className="absolute bg-gray-800 hidden group-hover:block  px-4 py-2 mr-2 space-y-2 list-none w-40">
            <li>
              <Link href="/cpu" className="hover:text-gray-300">
                Processor
              </Link>
            </li>
            <li>
              <Link href="/motherboard" className="hover:text-gray-300">
                Motherboard
                </Link>
            </li>
            <li>
              <Link href="/ram" className="hover:text-gray-300">
                RAM
                </Link>
            </li>
            <li>
              <Link href="/psu" className="hover:text-gray-300">
                Power Supply Unit
                </Link>
            </li>
            <li>
              <Link href="/storage" className="hover:text-gray-300">
                Storage Device
                </Link>
            </li>
            <li>
              <Link href="/monitor" className="hover:text-gray-300">
                Monitor
                </Link>
            </li>
            <li>
              <Link href="/others" className="hover:text-gray-300">
                Others
                </Link>
            </li>
          </ul>
        </div>

        <Link href="/build-pc">
          {" "}
          <button className="h-8 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 border border-none">
            Build Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
