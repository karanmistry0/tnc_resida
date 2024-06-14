import { useState } from "react";
import logoImg from "../assets/logo.webp";

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navItems = [
    "Home",
    "About Us",
    "Properties",
    "Agents",
    "Pricing",
    "FAQ",
    "Blogs",
    "Pages",
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <nav className="bg-black grid lg:grid-cols-3 grid-cols-6 grid-flow-col auto-cols-max justify-between lg:p-4 py-8 px-4 items-center shadow-sm">
        <div className="lg:col-span-1 col-span-5">
          <img src={logoImg} alt="logoimage" className="lg:h-7 h-5" />
        </div>
        <div className="lg:hidden col-span-1 text-right">
          <i
            className="fa-solid fa-bars text-primary cursor-pointer"
            onClick={toggleSidebar}
          ></i>
        </div>
        <div className="hidden lg:flex col-span-6 lg:col-span-2 gap-6 w-max">
          {navItems.map((navItem, index) => (
            <a key={index} href="#" className="menu-item">
              {navItem}
            </a>
          ))}
        </div>
        <div className="hidden lg:block col-span-6 lg:col-span-1 text-center lg:text-right">
          <button className="text-lg bg-primary hover:bg-secondary text-white font-semibold py-3 px-8">
            Sign Up
          </button>
        </div>
      </nav>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center space-y-4 z-50">
          <div className="absolute top-4 left-4">
            <i
              className="fa-solid fa-arrow-left text-primary cursor-pointer"
              onClick={toggleSidebar}
            ></i>
          </div>
          {navItems.map((navItem, index) => (
            <a key={index} href="#" className="text-white text-lg">
              {navItem}
            </a>
          ))}
          <button className="text-lg bg-primary hover:bg-secondary text-white font-semibold py-3 px-8">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
