"use client"

import Link from "next/link"
import NavLink from "@/app/components/NavLink"
import { usePathname } from "next/navigation"
import DSLogoIcon from "@/app/favicon.ico"


export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="w-full bg-purple-900 text-orange-200 ">
      <nav className="flex justify-between px-6 py-4 pr-2">
        <ul className="flex items-center gap-1.5 text-orange-200">
          <Link href="/">
            <div className="relative cursor-pointer text-orange-200">
              {/* Desktop Logo */}
              <img
                src={DSLogoIcon.src}
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block text-orange-200"
              />
              {/* Mobile Logo */}
              <img
                src={DSLogoIcon.src}
                alt="PrintForge Logo"
                className="w-10 h-auto block md:hidden text-orange-200"
              />
            </div>
          </Link>
          <NavLink href="/" isActive={pathname === "/"}>Devil & Sun tattoo</NavLink>
        </ul>
        <ul className="flex items-center gap-1.5" >
          <NavLink href="/portfolio" isActive={pathname === "/portfolio"}>Portfolio</NavLink>
          <NavLink href="/proces" isActive={pathname === "/proces"}>Proces</NavLink>
          <NavLink href="/o_mne" isActive={pathname === "/o_mne"}>O mně</NavLink>
          <NavLink href="/dalsi_tvorba" isActive={pathname === "/dalsi_tvorba"}>Další tvorba</NavLink>
          <NavLink href="https://www.instagram.com/devilandsun.tattoo/">Instagram</NavLink>
          <NavLink href="https://www.facebook.com/devilandsun.tattoo/">Facebook</NavLink>
          <NavLink href="/rezervace" isActive={pathname === "/rezervace"}>Rezervace</NavLink>
        </ul>
      </nav>
    </header>
  )
}