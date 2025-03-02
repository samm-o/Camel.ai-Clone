"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-max-size">
          <div className="navLeft">
            <Link href="/" className="nav_logo">
              <Image 
                src="https://camelai.com/assets/images/main-camelai.png" 
                alt="camelAI logo" 
                width={100} 
                height={40} 
              />
            </Link>
          </div>
          <div className="navRight">
            <ul className="showNotMobile nav_links">
              <li><a className="nav-hover" href="https://camelai.com/blog">Blog</a></li>
              <li><a className="nav-hover" href="/pricing">Pricing</a></li>
              <li><a className="nav-hover" href="https://app.camelai.com">Log in</a></li>
            </ul>
            <li className="showMobile dropdown">
              <button className="hamburger-menu">
                <Image 
                  src="https://camelai.com/assets/images/menu-button.png" 
                  alt="menu button" 
                  width={24} 
                  height={24} 
                />
              </button>
              <ul className="dropdown-menu">
                <li><a href="https://camelai.com/blog">Blog</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="https://app.camelai.com">Log in</a></li>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
} 