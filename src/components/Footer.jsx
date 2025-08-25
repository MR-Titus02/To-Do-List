
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-8 py-4 text-center text-gray-500 text-sm shadow-inner">
            &copy; {new Date().getFullYear()} To-Do Pro. All rights reserved.
        </footer>
    );
};

export default Footer;