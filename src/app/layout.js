"use client"
import "./globals.css";
import Link from "next/link";
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-sky-100 bg-gradient-to-r via-sky-200 from-cyan-300 scroll-smooth">
      <title>Ahmad Falah</title>
      <div className={poppins.className}>
      <nav class="max-w-screen top-0 right-0 left-0 fixed border-gray-400 dark:bg-gray-800 dark:border-gray-700">
        <div class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="#home" class="flex items-center">
            <img
              src="https://img.freepik.com/premium-vector/abstract-initial-letter-af-fa-logo-violet-color-isolated-white-background_388320-835.jpg?w=740"
              class="h-8 mr-3 rounded-md"
              alt="Ahmad Falah"
            />
            <span class="text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-500 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ahmad Falah
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  href="#home"
                  class="block py-2 pl-3 pr-4 text-white bg-gray-900 rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-sky-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#techStack"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href="#personalProject"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Personal Project
                </Link>
              </li>
              <li>
                <Link
                  href="#myContact"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  My Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}
      </div>
    </html>
  );
}
