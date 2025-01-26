"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface DropdownImageMenuProps {
  links: string[];
  imageSrc: string;
  altText: string;
}

const DropdownImageMenu: React.FC<DropdownImageMenuProps> = ({ links, imageSrc, altText }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=" ">
      <div onClick={toggleMenu} className="cursor-pointer">
        <Image src={imageSrc} alt={altText} width={60} height={60} />
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-opacity-95 bg-white flex flex-col transition-all duration-500 ${
          menuOpen ? "translate-y-[88px] opacity-100"  : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="list-none  w-full p-0 m-0">
          {links.map((linkName, index) => (
            <li
              key={index}
              className="w-full h-[65px] border-b  border-t flex px-12 cursor-pointer border-gray-300 last:border-none focus:text-[#1376F8] text-black  text-xl hover:text-2xl hover:bg-gray-100  transition-all duration-300"
            >
              <Link onClick={toggleMenu} href={`pages/${linkName}`} >
                <div className="  text-start  py-4">
                  {linkName}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      
      </div>
    </div>
  );
};

export default DropdownImageMenu;
