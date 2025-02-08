// 'use client';
// import { Provider } from 'react-redux';
// import store from '../redux/store'; // Adjust the path if necessary
// import { Geist, Geist_Mono } from 'next/font/google';
// import './globals.css';
// import Link from 'next/link';
// import LanguageIcon from '@mui/icons-material/Language';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import { useRouter } from 'next/navigation'; // Import useRouter

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// export default function RootLayout({ children }) {
//   const router = useRouter(); // Get current route

//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <Provider store={store}>
//           <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
//           <header className="p-4 bg-white text-black flex items-center justify-between shadow-md">
//             <div className="flex items-center justify-between gap-5">
//               {/* Company Logo */}
//               <Link href="/">
//                 <img
//                   src="https://static.wixstatic.com/media/cf83c9_72a1f255167a4937ab112637b060a6d4~mv2.png/v1/crop/x_32,y_0,w_320,h_300/fill/w_89,h_84,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cf83c9_72a1f255167a4937ab112637b060a6d4~mv2.png"
//                   alt="Company Logo"
//                   className="h-8 mr-4"
//                 />
//               </Link>
//               <nav>
//                 <ul className="flex gap-4">
//                   {[
//                     { href: '/insights', label: 'Insights' },
//                     { href: '/services', label: 'Services' },
//                     { href: '/case-studies', label: 'Case Studies' },
//                     { href: '/career', label: 'Careers' },
//                     { href: '/blog', label: 'Blog' },
//                     { href: '/about', label: 'About us' },
//                     { href: '/contact', label: 'Contact' },
//                   ].map(({ href, label }) => (
//                     <li key={href}>
//                       <Link href={href} className={router.pathname === href ? 'text-gold' : 'text-black'}>
//                         {label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//             <div className="p-4 bg-white text-black flex items-center justify-between">
//               {/* Navigation and Icons */}
//               <div className="flex items-center gap-6">
//                 {/* Search Icon */}
//                 <div className="cursor-pointer">
//                   <SearchIcon className="text-black" />
//                 </div>
//                 {/* Language Change Dropdown */}
//                 <div className="relative">
//                   <button className="text-black flex items-center">
//                     <LanguageIcon />
//                     <span className="ml-1">Language</span>
//                   </button>
//                   {/* Dropdown can be added here */}
//                 </div>

//                 {/* Hamburger Menu Icon */}
//                 <div className="cursor-pointer">
//                   <MenuIcon className="text-black" />
//                 </div>
//               </div>
//             </div>
//           </header>


//             <main className="flex flex-col items-center justify-center">
//               {children}
//             </main>
//             <footer className="p-4 bg-gray-800 text-white text-center">
//               © 2025 AAS One
//             </footer>
//           </div>
//         </Provider>
//       </body>
//     </html>
//   );
// }


'use client';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Adjust the path if necessary
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const router = useRouter();


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
         
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
              <header className="p-6 bg-white text-black flex items-center justify-between shadow-md">
                <div className="flex items-center justify-between gap-5">
                  {/* Company Logo */}
                  <Link href="/">
                    <img
                      src="https://static.wixstatic.com/media/cf83c9_72a1f255167a4937ab112637b060a6d4~mv2.png/v1/crop/x_32,y_0,w_320,h_300/fill/w_89,h_84,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cf83c9_72a1f255167a4937ab112637b060a6d4~mv2.png"
                      alt="Company Logo"
                      className="h-8 mr-4"
                    />
                  </Link>
                  <nav>
                    <ul className="flex gap-4">
                      {[
                        { href: '/insights', label: 'Insights' },
                        { href: '/services', label: 'Services' },
                        { href: '/case-studies', label: 'Case Studies' },
                        { href: '/career', label: 'Careers' },
                        { href: '/blog', label: 'Blog' },
                        { href: '/about', label: 'About us' },
                        { href: '/contact', label: 'Contact' },
                        { href: '', label: 'More' },
                      ].map(({ href, label }) => (
                        <li key={href}>
                          <Link href={href} className={router.pathname === href ? 'text-gold' : 'text-black'}>
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
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
                  <div className="cursor-pointer">
                    <MenuIcon className="text-black" />
                  </div>
                </div>
              </header>

              <main className="flex flex-col items-center justify-center">
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




