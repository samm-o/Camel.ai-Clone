"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Hamburger menu functionality
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    if (hamburgerMenu && dropdownMenu) {
      // Show/hide dropdown menu
      const handleHamburgerClick = () => {
        dropdownMenu.classList.toggle('show');
      };
      
      hamburgerMenu.addEventListener('click', handleHamburgerClick);
      
      // Close dropdown menu when clicking outside
      const handleDocumentClick = (event: MouseEvent) => {
        if (!dropdownMenu.contains(event.target as Node) && 
            !hamburgerMenu.contains(event.target as Node)) {
          dropdownMenu.classList.remove('show');
        }
      };
      
      document.addEventListener('click', handleDocumentClick);
      
      // Scroll detection for changing nav color
      const handleScroll = () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
          if (window.scrollY > 70) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Clean up event listeners
      return () => {
        hamburgerMenu.removeEventListener('click', handleHamburgerClick);
        document.removeEventListener('click', handleDocumentClick);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  return (
    <header>
      <nav id="navbar">
        <div className="nav-max-size">
          <div className="navLeft">
            <Link href="/" className="nav_logo">
              <Image 
                src="https://camelai.com/assets/images/main-camelai.png" 
                alt="camelAI logo" 
                width={150} 
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