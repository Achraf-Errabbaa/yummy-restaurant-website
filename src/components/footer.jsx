import React from 'react';
import { TiLocationOutline } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { TbClockHour11 } from "react-icons/tb";

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <h1 className="font-bold text-2xl sm:text-3xl text-white">
                                Yummy<span className="text-red-600 font-extrabold">.</span>
                            </h1>
                        </a>
                    </div>

                    {/* Info Sections */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 col-span-1 md:col-span-2 lg:col-span-3">
                        {/* Address */}
                        <div className="text-white">
                            <i className="text-3xl sm:text-4xl mb-4 block">
                                <TiLocationOutline />
                            </i>
                            <h2 className="mb-4 font-bold text-red-500 text-base sm:text-lg uppercase">
                                Address
                            </h2>
                            <p className="text-sm sm:text-base mb-2">A108 Adam Street</p>
                            <p className="text-sm sm:text-base">New York, NY 535022</p>
                        </div>

                        {/* Contact */}
                        <div className="text-white">
                            <i className="text-3xl sm:text-4xl mb-4 block">
                                <IoCallOutline />
                            </i>
                            <h2 className="mb-4 font-bold text-red-500 text-base sm:text-lg uppercase">
                                Contact
                            </h2>
                            <p className="text-sm sm:text-base mb-2">Phone: +1 5589 55488 55</p>
                            <p className="text-sm sm:text-base">Email: info@example.com</p>
                        </div>

                        {/* Hours */}
                        <div className="text-white">
                            <i className="text-3xl sm:text-4xl mb-4 block">
                                <TbClockHour11 />
                            </i>
                            <h2 className="mb-4 font-bold text-red-500 text-base sm:text-lg uppercase">
                                Opening Hours
                            </h2>
                            <p className="text-sm sm:text-base">
                                Monday - Friday:<br />9:00 AM - 5:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Follow Us */}
                            <div>
                                <h2 className="mb-4 text-sm font-semibold text-white uppercase">
                                    Follow us
                                </h2>
                                <ul className="flex flex-row sm:flex-col gap-4 text-gray-400">
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            X
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h2 className="mb-4 text-sm font-semibold text-white uppercase">
                                    Legal
                                </h2>
                                <ul className="text-gray-400">
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-white transition-colors">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                {/* Footer Bottom */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023 <a href="/" className="hover:underline">Yummy</a>. All Rights Reserved.
                        Designed by <span className="text-red-500 font-bold text-base">a guy with a rocket launcher</span>
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
