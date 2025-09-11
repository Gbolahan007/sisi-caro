"use client";

import CartDrawer from "@/app/cartStore/CartDrawer";
import useCartStore from "@/app/cartStore/store";
import { motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Kode_Mono, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Bebas = Kode_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

function Header() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const getItemCount = useCartStore((state) => state.getItemCount);

  const isCheckoutPage = pathname.startsWith("/checkout");
  const needsSolidBackground = isCheckoutPage;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
        setMobileMenuOpen(false);
        setCartOpen(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const getHeaderStyles = () => {
    if (needsSolidBackground) {
      return "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100";
    } else {
      // Original behavior for pages with hero images
      return isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
        : "bg-transparent";
    }
  };

  const getLogoStyles = () => {
    if (needsSolidBackground) {
      return "filter-none";
    } else {
      return isScrolled ? "filter-none" : "drop-shadow-2xl brightness-0 invert";
    }
  };

  const getNavItemStyles = (isActive) => {
    if (needsSolidBackground) {
      return isActive
        ? "bg-black text-white"
        : "text-black hover:bg-black hover:text-white";
    } else {
      return isScrolled
        ? isActive
          ? "bg-black text-white"
          : "text-black hover:bg-black hover:text-white"
        : isActive
        ? "bg-white text-black shadow-lg"
        : "text-white hover:bg-white hover:text-black border border-white/20 backdrop-blur-sm";
    }
  };

  const getButtonStyles = () => {
    if (needsSolidBackground) {
      return "text-black hover:bg-black/10";
    } else {
      return isScrolled
        ? "text-black hover:bg-black/10"
        : "text-white hover:bg-white/10";
    }
  };

  const getCtaStyles = () => {
    if (needsSolidBackground) {
      return "bg-red-600 text-white hover:bg-red-700";
    } else {
      return isScrolled
        ? "bg-red-600 text-white hover:bg-red-700"
        : "bg-white text-black hover:bg-gray-100 border border-white/30";
    }
  };

  const getMobileButtonStyles = () => {
    if (needsSolidBackground) {
      return "text-black hover:bg-black/10";
    } else {
      return isScrolled
        ? "text-black hover:bg-black/10"
        : "text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm";
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className={`${
          poppins.className
        } fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${getHeaderStyles()}`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-20">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/sis-carooo.png"
              alt="sisi-caro Logo"
              width={70}
              height={40}
              className={`transition-all duration-300 ${getLogoStyles()}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-out group overflow-hidden rounded-lg ${getNavItemStyles(
                        isActive
                      )}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className={`relative p-2 rounded-lg transition ${getButtonStyles()}`}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {mounted && getItemCount() > 0 && (
                <span
                  className={`${Bebas.className} absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full`}
                >
                  {getItemCount()}
                </span>
              )}
            </button>

            <div className="hidden lg:block">
              <Link
                href="/get-started"
                className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${getCtaStyles()}`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-2 transition-all duration-300 rounded-lg ${getMobileButtonStyles()}`}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Separate Components */}
      <CartDrawer open={cartOpen} setOpen={setCartOpen} />
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </>
  );
}

export default Header;
