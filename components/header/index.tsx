"use client";

import Link from "next/link";

const Index = () => {

  const links = [
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Контакты",
      url: "/contact",
    },
    {
      title: "About",
      url: "/about",
    },
   
    {
      title: "Home",
      url: "/home",
    },
  ];

  return (
    <>
      <div className="bg-[#1F1D14]">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-[10px]">
            <ul className="flex items-center gap-[30px]">
              <div className="hidden lg:flex items-center gap-[30px]">
                {links?.map((item, index) => (
                  <li
                    key={index}
                    className="font-Fira Sans text-white opacity-80 text-[16px] relative"
                    id="navbar_link"
                  >
                    <Link href={`${item.url}`}>{item.title}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Index;
