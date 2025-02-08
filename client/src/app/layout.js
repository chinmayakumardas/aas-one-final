

'use client';
import React from "react";
import { Provider } from 'react-redux';
import store from "@/redux/store";
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toasts globally

import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Adjust path

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const components = [
  { title: 'Alert Dialog', href: '/docs/primitives/alert-dialog', description: 'A modal dialog that interrupts the user with important content and expects a response.' },
  { title: 'Hover Card', href: '/docs/primitives/hover-card', description: 'For sighted users to preview content available behind a link.' },
  { title: 'Progress', href: '/docs/primitives/progress', description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.' },
  { title: 'Scroll-area', href: '/docs/primitives/scroll-area', description: 'Visually or semantically separates content.' },
  { title: 'Tabs', href: '/docs/primitives/tabs', description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.' },
  { title: 'Tooltip', href: '/docs/primitives/tooltip', description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.' },
];

export default function RootLayout({ children }) {
  const router = useRouter();
  
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close dropdown if already open
    } else {
      setOpenDropdown(index); // Open the clicked item's dropdown
    }
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <header className="py-4  bg-white text-black flex items-center justify-between shadow-md">
               {/* ShadCN Navigation Menu */}
               <NavigationMenu >
                    {/* Company Logo */}
                    <Link href="/">
                      <img
                        src="https://static.wixstatic.com/media/cf83c9_72a1f255167a4937ab112637b060a6d4~mv2.png/v1/crop/x_32,y_0,w_320,h_300/fill/w_89,h_84,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cf83c9_72a1f255167a4937ab112637b060a6d4~mv2.png"
                        alt="Company Logo"
                        className="h-8 mr-4 ml-6"
                      />
                    </Link>
                  <NavigationMenuList className="relative ">
                  
                    {/* Static More section */}
                    <NavigationMenuItem className="group ">
                      <NavigationMenuTrigger className="">Insights</NavigationMenuTrigger>
                      <NavigationMenuContent className=" transition-all duration-300 group-hover:w-[100vw]">
                        <ul className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]">
                         
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    {/* Static Getting Started Section 2 */}
                    <NavigationMenuItem className="group ">
                      <NavigationMenuTrigger>More</NavigationMenuTrigger>
                      <NavigationMenuContent className="transition-all duration-300 group-hover:w-[100vw]">
                      <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr] w-[100vw]">
                          {[
                            { label: 'About', route: 'about' },
                            { label: 'Login', route: 'auth' },
                            { label: 'Contact Us', route: 'contact' }
                          ].map((component, index) => (
                            <li key={index}>
                              <Link
                                href={`/${component.route}`} // Use the route value for the URL
                                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                              >
                                {component.label} {/* Use the label value for display text */}
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </NavigationMenuContent>
                    </NavigationMenuItem>

                
                  </NavigationMenuList>
                </NavigationMenu>

              <div className="flex items-center gap-6">
                {/* Search Icon */}
                <div className="cursor-pointer">
                  <SearchIcon className="text-black" />
                </div>
                {/* Language Change Dropdown */}
                <div className="relative">
                  <button className="text-black flex items-center">
                    <LanguageIcon />
                    <span className="ml-1">Language</span>
                  </button>
                </div>
                {/* Hamburger Menu Icon */}
                <div className="cursor-pointer mr-6">
                  <MenuIcon className="text-black" />
                </div>
              </div>
            </header>

            <main className="flex flex-col items-center justify-center">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeButton />
              {children}
            </main>

            <footer className="p-4 bg-gray-800 text-white text-center">
              © 2025 AAS One
            </footer>
          </div>
        </Provider>
      </body>
    </html>
  );
}

// ListItem Component without TypeScript types
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
