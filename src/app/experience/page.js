import Computer from "../../components/Computer";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Experience() {
  return (
    <Computer>
      <main className="content py-2.5 px-5 pb-5">
        <Navigation showBack={true} backLink="/main" />
        <h1 className="text-2xl my-1 text-center text-black">Experience</h1>

        <div>
          <h2 className="mt-4 font-bold text-xl text-sky-600">Education</h2>
          <p>
            <strong>University of British Columbia</strong>{" "}
            <span className="text-gray-600 font-normal ml-2">
              {" "}
              Expected Graduation 05/2026
            </span>
            <br />
            <em>Bachelors in Computer Science and Business</em>
          </p>
          <ul className="list-disc list-inside">
            <li>
              Dean's Honor Roll (<strong>80%+ average</strong>) for all
              semesters from 09/2021 - Present
            </li>
            <li>
              Key Courses: Java OOP, Algorithms and Data Structures, Software
              Architecture, Databases, Intro to AI
            </li>
            <li>
              Certification: Codecademy Full Stack Engineer 2023 (Web Security,
              Front-End, and Back-End development)
            </li>
            <li>
              International Exchange: Studied Information Systems at Copenhagen
              Business School (08/2024 - 12/2024)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mt-4 font-bold text-xl text-sky-600">
            Technical Skills
          </h2>
          <p>
            <strong>Languages:</strong> Python, JavaScript, TypeScript, Java,
            HTML, CSS, SQL, C, C++, R<br />
            <strong>Frameworks:</strong> React.js, Next.js, Tailwind, Node.js,
            Git, JSON, Mocha, Chai
            <br />
            <strong>Tools:</strong> GitHub, GitLab, AWS, Figma, VSCode, Notion,
            Slack, Tableau, Linux, Excel
          </p>
        </div>

        <div>
          <h2 className="mt-4 font-bold text-xl text-sky-600">
            Work Experience
          </h2>

          <p className="font-bold">
            Software Engineer Intern{" "}
            <span className="text-gray-600 font-normal ml-2">
              {" "}
              05/2025 - Present
            </span>
          </p>
          <p>Microsoft - Azure OneFleet Platform, Redmond, WA</p>
          <br></br>

          <p className="job-title font-bold">
            Machine Learning Teaching Assistant{" "}
            <span className="text-gray-600 font-normal ml-2">
              01/2025 - 04/2025
            </span>
          </p>
          <p>University of British Columbia, Vancouver, BC</p>
          <ul className="list-disc list-inside">
            <li>
              Conducted <strong>12+</strong> tutorial sessions to communicate
              machine learning processes and data analysis techniques.
            </li>
            <li>
              Facilitated learning of Python-based ML libraries like
              scikit-learn through debugging codebases and discussion.
            </li>
          </ul>
          <br></br>

          <p className="job-title font-bold">
            Support Engineer Intern{" "}
            <span className="text-gray-600 font-normal ml-2">
              05/2024 - 08/2024
            </span>
          </p>
          <p>Amazon Web Services - Thinkbox, Winnipeg, MB</p>
          <ul className="list-disc list-inside">
            <li>
              Created tile rendering feature for AWS service by writing{" "}
              <a
                href="https://github.com/aws-deadline"
                target="_blank"
                className="hover:text-sky-600"
              >
                open source scripts
              </a>{" "}
              reducing up to <strong>30%</strong> of render time.
            </li>
            <li>
              Authored{" "}
              <a
                href="https://aws.amazon.com/blogs/media/create-a-tile-rendering-job-with-modifications-for-aws-deadline-cloud/"
                target="_blank"
                className="hover:text-sky-600"
              >
                technical blog post
              </a>{" "}
              with <strong>3000</strong> monthly views communicating how to
              create custom user workflows.
            </li>
            <li>
              Resolved <strong>9%</strong> of total customer errors within SLA
              by analyzing logs and code to maintain <strong>2</strong> AWS
              product systems.
            </li>
            <li>
              Improved internal workflows by creating <strong>4+</strong>{" "}
              knowledge base articles and processes to expedite troubleshooting.
            </li>
          </ul>
          <br></br>
        </div>

        <div>
          <h2 className="mt-4 font-bold text-xl text-sky-600">
            Extracurriculars
          </h2>

          <p className="job-title font-bold">
            Web Developer{" "}
            <span className="text-gray-600 font-normal ml-2">
              09/2023 - 01/2025
            </span>
          </p>
          <p className="hover:text-sky-600">
            <a href="https://ubcsolar.com/" target="_blank">
              UBC Solar
            </a>
          </p>
          <ul className="list-disc list-inside">
            <li>
              Drove development of a new marketing website for solar-powered car
              resulting in a <strong>20%</strong> page traffic increase.
            </li>
            <li>
              Reduced <strong>50%</strong> of onboarding time for developers by
              improving codebase documentation.
            </li>
            <li>
              Led QA efforts in identifying and resolving <strong>37</strong>{" "}
              critical bugs within React application, enhancing overall
              reliability.
            </li>
            <li>
              Designed decal, merch, website, and social media graphics to
              increase brand awareness and engagement.
            </li>
          </ul>
          <br></br>

          <p className="job-title font-bold">
            Software Engineer{" "}
            <span className="text-gray-600 font-normal ml-2">
              05/2023 - 05/2024
            </span>
          </p>
          <p className="hover:text-sky-600">
            <a href="https://enactusubc.ca/" target="_blank">
              Enactus UBC
            </a>
          </p>
          <ul className="list-disc list-inside">
            <li>
              Spearheaded migration of codebase from Wix to Next.js saving{" "}
              <strong>$300+</strong> in yearly website management costs.
            </li>
            <li>
              Collaborated with a cross-functional team of <strong>6</strong>{" "}
              developers and designers to ship software to{" "}
              <strong>10,000</strong> users.
            </li>
            <li>
              Increased applicant volume by <strong>40%</strong> in the first
              quarter by designing, developing and shipping a branded website.
            </li>
          </ul>
          <br></br>

          <p className="job-title font-bold">
            Graphic Designer{" "}
            <span className="text-gray-600 font-normal ml-2">
              May 2023 – Present
            </span>
          </p>
          <p>Comm Collection – Sauder Commerce Undergraduate Society</p>
          <ul className="list-disc list-inside">
            <li>
              Designed and drew graphics for seasonal clothing brand lines using
              Sketchbook, Figma, and photo editing software.
            </li>
            <li>
              Created thoughtful brand design and coordinated team efforts
              toward thematic direction under tight deadlines.
            </li>
          </ul>
          <br></br>

          <p className="job-title font-bold">
            VP Marketing – UBC Business and Computer Science{" "}
            <span className="text-gray-600 font-normal ml-2">
              Mar 2022 – May 2023
            </span>
          </p>
          <p>Sauder Commerce Undergraduate Society</p>
          <ul className="list-disc list-inside">
            <li>
              Onboarded new community members by organizing events and resources
              for over <strong>300</strong> students.
            </li>
            <li>
              Increased social media engagement by <strong>213%</strong> through
              strategic promotions and branding initiatives.
            </li>
            <li>
              Maintained a 1-day turnaround on marketing designs and same-day
              response time for external inquiries.
            </li>
          </ul>
          <br></br>

          <p className="job-title font-bold">
            National Strategy Consulting Competition{" "}
            <span className="text-gray-600 font-normal ml-2">Nov 2022</span>
          </p>
          <ul className="list-disc list-inside">
            <li>
              Awarded semi-finalist for presenting business management solutions
              to corporations within a 12-hour timeframe.
            </li>
            <li>
              Analyzed business needs to construct comprehensive and innovative
              strategies and technical implementations.
            </li>
          </ul>
          <br></br>
        </div>
      </main>
      <Footer />
    </Computer>
  );
}
