import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import PlatformMenu from "./NavItemCompoenet";
import { Link, NavLink, useNavigate } from "react-router-dom";

type NavItem = {
  name: string;
  url?: string;
  component?: React.ReactNode;
};

export default function Header() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<NavItem | null>(null);
  const closeTimeout = useRef<number | null>(null);

  const openMenu = (item: NavItem) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setActiveMenu(item);
  };

  const closeMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  const navItems: NavItem[] = [
    {
      name: "Our Platform",
      component: <PlatformMenu />,
    },
    {
      name: "Solutions",
      url: "/solutions",
    },
    {
      name: "Pricing",
      url: "/pricing",
    },
    {
      name: "Resources",
      url: "/resources",
    },
    {
      name: "About",
      url: "/about",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-[68px] bg-white z-50 shadow-md 
        `}
    >
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div>
          <Link
            to={"/"}
            className="font-['Syne',sans-serif] text-green text-[20px] lg:text-[21px] font-extrabold tracking-[-0.02em]"
          >
            Sathi
          </Link>
        </div>

        {/* Desktop Nav Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
            item.url ? (
              <NavLink
                key={item.name}
                to={item.url}
                onMouseEnter={() => item.component && openMenu(item)}
                onMouseLeave={closeMenu}
                className={({ isActive }) =>
                  `text-[16px] font-medium transition-colors duration-200 ${
                    isActive ? "text-green" : "text-faint hover:text-green"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ) : (
              <button
                key={item.name}
                onMouseEnter={() => item.component && openMenu(item)}
                onMouseLeave={closeMenu}
                className="text-[16px] cursor-pointer font-medium text-faint transition-colors duration-200 hover:text-green"
              >
                {item.name}
              </button>
            ),
          )}
        </div>

        {/* mega menu */}
        <div
          onMouseEnter={() => {
            if (closeTimeout.current) {
              clearTimeout(closeTimeout.current);
            }
          }}
          onMouseLeave={closeMenu}
          className={`
            absolute top-full left-0 origin-top
            transition-all duration-400 ease-out
            ${
              activeMenu
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1 pointer-events-none"
            }
          `}
        >
          {activeMenu?.component}
        </div>

        <div className="hidden gap-[20px] lg:flex">
          <button className="px-[18px] py-[8px] cursor-pointer rounded-lg text-[14px] bg-transparent border border-green text-black transition-colors duration-200 hover:border-green">
            Sign in
          </button>
          <button className="px-[24px] py-[8=1px] cursor-pointer rounded-3xl text-[14px] font-medium bg-green shadow-md text-white border-none transition-opacity duration-200 hover:bg-[#093f34]">
            Get a Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            setTimeout(() => {
              setOpen((prev) => !prev);
            }, 200); // delay in ms
          }}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg border border-green
            bg-green text-text
            lg:hidden
          "
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[360px] rounded-l-3xl
          bg-ink/95 backdrop-blur-xl
          border-l border-border
          z-50
          transform transition-transform duration-500 ease-in-out
          lg:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close area + content */}
        <div className="flex h-full flex-col px-5 py-6">
          {/* Close button row */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setOpen(false)}
              className="h-10 w-10 flex items-center justify-center rounded-lg border border-border bg-surface"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-y-8 px-5 py-5">
            <div className="flex flex-col gap-5">
              {["Services", "How it works", "Pricing"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-[15px] text-muted hover:text-text transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-auto flex flex-col gap-3">
              <button className="rounded-lg border border-green px-4 py-3 text-[14px] text-ink">
                Sign in
              </button>

              <button className="rounded-lg bg-green px-4 py-3 text-[14px] font-medium text-white">
                List your business
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 lg:hidden backdrop-blur-[1px]"
        />
      )}
    </nav>
  );
}
