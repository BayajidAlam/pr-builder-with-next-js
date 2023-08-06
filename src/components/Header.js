import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-white flex items-center justify-between lg:container w-[95%] mx-auto py-2 z-50">
      <Link href="/">
        <p className="text-black text-3xl font-bold">Next Pc</p>
      </Link>
      <div className="flex gap-16 items-center">
        <div className="relative group ">
          <div className="text-lg px-3  h-8 w-28 bg-gradient-to-r from-violet-500 to-fuchsia-500 border border-none text-white font-bold">Categories</div>
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
            {session?.user && (
              <li>
                <button 
                onClick={()=>signOut(session)}
                className="hover:text-gray-300 bg-blue-800 outline-none text-gray-300 ">
                  Log out
                </button>
              </li>
            )}
          </ul>
        </div>

        <Link href="/build-pc">
          {" "}
          <button className="h-8 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 border border-none text-white font-bold">
            Build Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
