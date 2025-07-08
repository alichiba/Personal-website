import Link from "next/link";
import Computer from "../../components/Computer";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Endeavours() {
  return (
    <Computer>
      <main className="content py-2.5 px-5 pb-5">
        <Navigation showBack={true} backLink="/main" />
        <h1 className="text-2xl my-1 text-center text-black">
          Current Endeavours
        </h1>
        <h2 className="mt-4 text-center">Learning</h2>
        <h3 className="pt-3 pb-1">University</h3>
        <p className="text-gray-600">
          Through the combined major in Business and Computer Science at UBC, I
          have been learning about the fundamentals of business as well as
          systematic program design and software construction.
        </p>
        <h3 className="pt-3 pb-1">Personal Learning</h3>
        <p className="text-gray-600">
          Over the summer, I am working on the full-stack engineer career path
          offered through Codecademy. The course goes through web development
          (HTML, CSS, JavaScript, React, etc) and back-end practices. Alongside
          this, I plan to work on a few personal{" "}
          <Link
            href="/projects"
            className="text-sky-400 underline hover:text-black"
          >
            projects
          </Link>{" "}
          as I learn.
        </p>
        <h3 className="pt-3 pb-1">Clubs</h3>
        <p className="text-gray-600">
          I am the marketing director for the BUCS Community team this upcoming
          year. Some other UBC clubs that I like to get involved with include
          BizTech and Boxing club. I was also part of JDC Junior Development
          last term which is a beginner case competition club where my team
          placed second place in the final case competition. Definitely looking
          to participate in more case competitions and hackathons soon.
        </p>
      </main>
      <Footer />
    </Computer>
  );
}
