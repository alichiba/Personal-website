import Link from "next/link";
import Computer from "../../components/Computer";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Main() {
  return (
    <Computer>
      <main className="p-2.5 px-5 pb-5 mt-6">
        <Navigation />
        <h3 className="mb-4 text-gray-400 text-sm">
          Showing all results for "Alison Hardy"
        </h3>

        <div className="flex items-center">
          <div className="w-10 h-10"></div>
          <div className="my-4 text-gray-600 w-4/5">
            <Link
              href="/about"
              className="text-xl leading-8 text-black no-underline hover:underline hover:cursor-pointer hover:text-[lightblue]"
            >
              About
            </Link>
            <p className="text-gray-400 text-sm">Get to know me</p>
          </div>
        </div>

        {/* <div className="flex items-center">
          <div className="w-10 h-10"></div>
          <div className="my-4 text-gray-600 w-4/5">
            <Link
              href="/endeavours"
              className="text-xl leading-8 text-black no-underline hover:underline hover:cursor-pointer hover:text-sky-300"
            >
              Current Endeavours
            </Link>
            <p>
              An overview of work, academic, and extracurricular activities
              currently in pursuit.
            </p>
          </div>
        </div> */}

        <div className="flex items-center">
          <div className="w-10 h-10"></div>
          <div className="my-4 text-gray-600 w-4/5">
            <a
              href="/experience"
              className="text-xl leading-8 text-black no-underline hover:underline hover:cursor-pointer hover:text-[lightblue]"
            >
              Experience
            </a>
            <p className="text-gray-400 text-sm">My professional experiences</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-10 h-10"></div>
          <div className="my-4 text-gray-600 w-4/5">
            <Link
              href="/projects"
              className="text-xl leading-8 text-black no-underline hover:underline hover:cursor-pointer hover:text-[lightblue]"
            >
              Projects
            </Link>
            <p className="text-gray-400 text-sm">
              Personal projects and extracurriculars
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Computer>
  );
}
