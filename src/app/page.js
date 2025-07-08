import Image from "next/image";
import Link from "next/link";
import Computer from "../components/Computer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Computer>
      <header className="flex py-2.5 px-5 pb-5 flex-col items-center text-center">
        {/* <h1 className="font-nunito text-10vw mt-12vh header-title max-w-full">
          Alison Hardy
        </h1> */}
        <img
          src="/resources/alison-hardy-blue.png"
          alt="Alison Hardy"
          className="px-24 pt-16 max-w-full"
        />
        <h2 className="text-gray-700">
          Software developer at Microsoft, prev AWS, UBC CS+Business student
        </h2>
        <Link
          href="/main"
          title="See results"
          className="w-4/5 m-4 no-underline"
        >
          <button className="font-nunito bg-white text-gray-700 border border-gray-300 py-2.5 w-full text-left flex items-center text-2xl rounded-full hover:shadow-lg hover:shadow-gray-300 cursor-pointer">
            <img
              src="/resources/search_logo.png"
              alt="search logo"
              className="w-5 h-auto mx-6"
            />
            <h4 className="typewriter">alison hardy...</h4>
          </button>
        </Link>
      </header>
      <Footer />
    </Computer>
  );
}
