// src/components/Header.tsx
import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50 w-full h-auto">
      <div className="container mx-auto flex items-center justify-between px-8 py-4 md:px-40 md:py-6">
        {/* Left Section */}
        <div className="text-2xl font-bold text-blue-600 mr-8"> {/* Add margin-right */}
          MORENT
        </div>

      {/* Center Section */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full max-w-md mx-8">
          {/* Left Search Logo */}
          <div className="mr-2"> {/* Margin to separate from input */}
            <Image 
              src="/images/search1.png" 
              alt="Search Icon" 
              width={24} // Adjust width as needed
              height={24} // Adjust height as needed
              className="object-contain" 
            />
          </div>
          <input
            type="text"
            placeholder="Write something here"
            className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400"
            aria-label="Search"
          />
           <div className="mr-2"> {/* Margin to separate from input */}
            <Image 
              src="/images/search2.png" 
              alt="Search Icon" 
              width={24} // Adjust width as needed
              height={24} // Adjust height as needed
              className="object-contain" 
            />
          </div>
          </div>
        {/* Right Section - Logos */}
        <div className='flex items-center space-x-4'> {/* Ensure this is a flex container with spacing */}
          <div className='logo'>
            <Image 
              src="/images/img header0.png" 
              alt="First Header Logo" 
              width={44} // Adjust width as needed
              height={44} // Adjust height as needed
              className="object-contain" 
            />
          </div>
          <div className='logo'>
            <Image 
              src="/images/img header1.png" 
              alt="Second Header Logo" 
              width={44} // Adjust width as needed
              height={44} // Adjust height as needed
              className="object-contain" 
            />
          </div>
          <div className='logo'>
            <Image 
              src="/images/img header2.png" 
              alt="Second Header Logo" 
              width={44} // Adjust width as needed
              height={44} // Adjust height as needed
              className="object-contain" 
            />
          </div>
          <div className='logo'>
            <Image 
              src="/images/img header3.png" 
              alt="Second Header Logo" 
              width={44} // Adjust width as needed
              height={44} // Adjust height as needed
              className="object-contain" 
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
