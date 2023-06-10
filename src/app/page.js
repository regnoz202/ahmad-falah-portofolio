"use client"
import Link from "next/link";
import "flowbite";

export default function Home() {
  return (
    <div>
      <main id="home" className="mt-20">
        <p className="m-5 mx-32 text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600">
          ahmad falah.
        </p>
        <p className="text-[4rem] mx-32 font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 ">
          a passionate front end web developer who recently graduate from
          Pamulang University
        </p>
        <p className="mt-24 m-5 mx-32 text-[2rem] font-bold text-gray-800">
          Bachelor in Informatics Engineering 💻
        </p>
      </main>
      <section id="techStack" className="mt-[12rem]">
        <h1 className="text-[3rem] text-center text-gray-800">
          My Tech Stack 💻
        </h1>
        <div className="flex justify-center">
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
              alt="JavaScript"
              className="h-24 m-5 mx-12 mt-20"
            />
          </Link>
          <Link href="https://react.dev/" target="_blank">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="ReactJs"
              className="h-24 m-5 mx-12 mt-20"
            />
          </Link>
          <Link href="https://nextjs.org/" target="_blank">
            <img
              src="https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/nextjs-fill-512.png"
              alt="NextJs"
              className="h-24 m-5 mx-12 mt-20"
            />
          </Link>
          <Link href="https://tailwindcss.com/" target="_blank">
            <img
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              alt="TailwindCSS"
              className="h-24 m-5 mx-12 mt-20"
            />
          </Link>
        </div>
      </section>
      <section id="personalProject">
        <h1 className="text-[3rem] text-center text-gray-800 m-5 mt-40">
          My Project 💼
        </h1>
        <project1>
          <div className="mx-auto items-center mt-20">
            <div class="mx-auto mt-10 m-5 max-w-sm bg-gray-100 bg-gradient-to-b via-sky-200 from-sky-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                href="https://react-mini-project-alpha.vercel.app/"
                target="_blank"
              >
                <img
                  class="rounded-t-lg"
                  src="https://i.ibb.co/SRdJhKz/regflix.jpg"
                  alt="Regflix"
                />
              </a>
              <div class="p-5">
                <a
                  href="https://react-mini-project-alpha.vercel.app/"
                  target="_blank"
                >
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Regflix
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Website yang terinspirasi dari netflix tetapi mengusung ui
                  yang berbeda dan simple, menggunakan data API dari The Movie
                  Database API
                </p>
                <a
                  href="https://react-mini-project-alpha.vercel.app/"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                >
                  Menuju Website
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-center mt-10 text-xl">Technology</h1>
          <div className="flex justify-center">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="ReactJs"
              className="h-24 m-5 mx-12 mt-10"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              alt="TailwindCSS"
              className="h-24 m-5 mx-12 mt-10"
            />
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="TailwindCSS"
              className="h-24 m-5 mx-12 mt-10"
            />
          </div>
        </project1>
      </section>

      <section id="myContact">
        <h1 className="text-[3rem] text-center text-gray-800 m-5 mt-40">
          My Contact 🚀
        </h1>
        <div class="m-10 mb-24 mx-auto w-full max-w-sm bg-gray-100 bg-gradient-to-b via-sky-200 from-sky-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center pb-10 pt-8">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://media.licdn.com/dms/image/D5603AQEW0FQxBQRprw/profile-displayphoto-shrink_800_800/0/1676189170813?e=1691625600&v=beta&t=FT_Y-kVW59YCHP8t7iiRaKiLuLc7DZUnWH_fMAD-2Ms"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Ahmad Falah
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              falah.wizzard@gmail.com
            </span>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://www.linkedin.com/in/ahmad-falah-2a06a5196/"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="mailto:falah.wizzard@gmail.com
                "
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                target="_blank"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
