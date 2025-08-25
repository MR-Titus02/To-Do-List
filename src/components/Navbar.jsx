
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-3 px-4">
                <div className="flex items-center gap-2">
                    
                    <span className="text-2xl font-bold text-blue-600 tracking-wide">To-Do Pro</span>
                </div>
                <ul className="flex gap-6 text-gray-700 font-medium">
                    <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition">Tasks</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition">About</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;