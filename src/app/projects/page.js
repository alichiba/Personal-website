import Computer from "../../components/Computer";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <Computer>
      <main className="content py-2.5 px-5 pb-5">
        <Navigation showBack={true} backLink="/main" />
        <h1 className="text-2xl my-1 text-center text-black">Projects</h1>

        <h2 className="mt-4 text-left font-bold text-xl text-sky-600">
          Personal Projects
        </h2>
        <div className="pl-8">
          <h3 className="pt-3 pb-1 font-bold">
            Coupling Visualizer -{" "}
            <a
              href="https://github.com/alichiba/CouplingVisualizer_CPSC410"
              target="_blank"
              rel="noopener"
              className="text-[skyblue] underline hover:text-sky-600"
            >
              GitHub
            </a>
          </h3>
          <p className="text-gray-600">
            A tool that visualizes the coupling and transitive dependencies
            between classes called in a python pytest suite.
          </p>

          <h3 className="pt-3 pb-1 font-bold">File Management DSL</h3>
          <p className="text-gray-600">
            A domain-specific language for managing files and directories.
          </p>

          <h3 className="pt-3 pb-1 font-bold">
            Spotifynd -{" "}
            <a
              href="https://github.com/alichiba/spotifynd"
              target="_blank"
              rel="noopener"
              className="text-[skyblue] underline hover:text-sky-600"
            >
              GitHub
            </a>
          </h3>
          <p className="text-gray-600">
            Modern day version of a mixtape. Spotifynd uses Spotify's library
            and visualizes the creation of a playlist. It's also supposed to
            generate coverart from Unsplash from text input. Might add AI art
            generation in the future. My first React & deployed web app.
            <br />
          </p>

          <h3 className="pt-3 pb-1 font-bold">
            Personal Website -{" "}
            <a
              href="https://github.com/alichiba/Personal-website"
              target="_blank"
              rel="noopener"
              className="text-[skyblue] underline hover:text-sky-600"
            >
              GitHub
            </a>
          </h3>
          <p className="text-gray-600">
            This website :)
            <br />
          </p>

          <h3 className="pt-3 pb-1 font-bold">
            Pill Tracker App -{" "}
            <a
              href="https://github.com/alichiba/Pill-Tracker-Project.git"
              target="_blank"
              rel="noopener"
              className="text-[skyblue] underline hover:text-sky-600"
            >
              GitHub
            </a>
          </h3>
          <p className="text-gray-600">
            {" "}
            Java application that tracks weekly medication consumption with a
            console and graphical user interface. Started for my CPSC210 (course
            on software construction) at UBC; I revised the application after
            the course ended to complete the features that I had envisioned for
            it. <br />
          </p>
        </div>

        <h2 className="mt-4 text-left font-bold text-xl text-sky-600">
          Hackathon Projects
        </h2>
        <h3 className="pt-3 pb-1 font-bold">
          BUCS Hackathon 2025 - meme-o-tron -{" "}
          <a
            href="https://devpost.com/software/meme-o-tron"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            Devpost
          </a>
        </h3>
        <p className="text-gray-600">
          Bringing jumbotron lookalikes to your mobile devices.
        </p>

        <h3 className="pt-3 pb-1 font-bold">
          ProduHacks 2024 - Pointer -{" "}
          <a
            href="https://devpost.com/software/pointer-945kta"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            Devpost
          </a>
        </h3>
        <p className="text-gray-600">Internal AI search tool as a service.</p>

        <h3 className="pt-3 pb-1 font-bold">
          NWHacks 2024 - BrodieAI -{" "}
          <a
            href="https://devpost.com/software/brodieai"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            Devpost
          </a>
          ,
          <a
            href="https://github.com/RyanHaraki/Brodie-AI"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            GitHub
          </a>
        </h3>
        <p className="text-gray-600">
          A wearable conversation AI that vaguely resembles BMO. I worked on the
          hardware and audio processing on a raspberry pi.
        </p>

        <h3 className="pt-3 pb-1 font-bold">
          cmd-f 2023 - colorpal -{" "}
          <a
            href="https://devpost.com/software/color-pal"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            Devpost
          </a>
          ,
          <a
            href="https://github.com/karenagustino/colorpal"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            GitHub
          </a>
        </h3>
        <p className="text-gray-600">
          Winner of MLH's Accessibility Award. Aimed to make makeup palettes
          accessible to the color-blind by scanning and identifying color shades
          and generating detailed color descriptions.
        </p>

        <h3 className="pt-3 pb-1 font-bold">
          NWHacks 2023 - Moments -{" "}
          <a
            href="https://devpost.com/software/moments-51wdr9"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            Devpost
          </a>
          ,
          <a
            href="https://github.com/RyanHaraki/NWHacks-2023---Moments"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            GitHub
          </a>
        </h3>
        <p className="text-gray-600">
          Winner of Livepeer's Best Video Award. Streaming service that allows
          streamers to share highlight moments with their fans through NFTs.
        </p>

        <h3 className="pt-3 pb-1 font-bold">
          HackCamp 2023 - VitaeC -{" "}
          <a
            href="https://devpost.com/software/vitae-c"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            Devpost
          </a>
          ,
          <a
            href="https://github.com/alichiba/Vitae-C"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            GitHub
          </a>
        </h3>
        <p className="text-gray-600">
          {" "}
          A resume resource site with tips and tricks on how to craft an
          effective resume. Attempted to include a feature to show how an ATS
          would view a submitted resume for users to reverse engineer their
          resume.
        </p>

        <h3 className="pt-3 pb-1 font-bold">
          ProduHacks 2022 - Pathw.EY -{" "}
          <a
            href="https://devpost.com/software/pathw-ey"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            Devpost
          </a>
        </h3>
        <p className="text-gray-600">
          An EY internal mobile web application that utilizes metaverse
          technology to host an interactive VR platform for learning and
          development. Main features included VR/gameified learning, a curated
          curriculum, and NFT badges. We considered user profiles, key
          performance indicators, and user acceptance testing. I learned a lot
          about product management practices through this experience.
        </p>

        <h3 className="pt-3 pb-1 font-bold">
          NWHacks 2022 - Appetime -{" "}
          <a
            href="https://github.com/alichiba/Appetime"
            target="_blank"
            rel="noopener"
            className="text-[skyblue] underline hover:text-sky-600"
          >
            GitHub
          </a>
        </h3>
        <p className="text-gray-600">
          Ideated a fridge application that can track the groceries in the
          refrigerator and their respective expiry dates. Main feature was a
          sustainability log that provided statistics on food wastage categories
          and trends that users could utilize to become more conscious of their
          waste habits while becoming smarter shoppers. My first hackathon.
        </p>
      </main>
      <Footer />
    </Computer>
  );
}
