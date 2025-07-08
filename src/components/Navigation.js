import Link from "next/link";

export default function Navigation({ showBack = false, backLink = "/main" }) {
  return (
    <nav className="mt-2 flex flex-col">
      <a href="/" title="Go to homepage">
        <img src="/resources/alison-hardy-blue.png" className="transition-transform duration-200 ease-in-out hover:scale-110 w-34"></img>
      </a>
      {showBack && (
        <Link
          href={backLink}
          className="text-black no-underline hover:text-[lightblue] hover:underline"
        >
          &lt; Back to results
        </Link>
      )}
    </nav>
  );
}
