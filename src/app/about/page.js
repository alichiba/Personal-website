import Computer from "../../components/Computer";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <Computer>
      <main className="content py-2.5 px-5 pb-5">
        <Navigation showBack={true} backLink="/main" />
        <h1 className="text-2xl my-1 text-center text-black">About</h1>

        <h3 className="pt-3 pb-1 font-bold text-xl text-sky-600">
          Software Development
        </h3>
        <p>
          - Building full-stack software engineering skills. <br></br>- I want
          to create a positive impact on everyday lives through my work.{" "}
          <br></br>- Favourite lanugages are Python and Typescript/Javascript.{" "}
          <br></br>- Always open to learning new technologies, and seeing how
          technology can be applied to problems. <br></br>
        </p>
        <h3 className="pt-3 pb-1 font-bold text-xl text-sky-600">Design</h3>
        <p>
          Creativity is integral for me, and the reason I enjoy designing
          graphics through various mediums. Having a background in business
          makes me keen to see things from a product and business perspective so
          I also enjoy product design.
        </p>
        <h3 className="pt-3 pb-1 font-bold text-xl text-sky-600">
          The Environment
        </h3>
        <p>
          I want others, including future generations to be able to appreciate
          the beauty of the Earth. I think others want the same, but it can be
          hard to take positive action when there is a lack of immediate
          incentive. I aspire to help close the intention-action gap so Earth
          can flourish for years to come.
        </p>
        <h3 className="pt-3 pb-1 font-bold text-xl text-sky-600">Hobbies</h3>
        <p>
          Outside of tech and business, I enjoy being outdoors and exploring new
          places. The adventure of delving into a different world really
          enriches my appreciation for all the details of life.
        </p>
        <p className="text-gray-600">
          <br></br>Memento mori.
        </p>
      </main>
      <Footer />
    </Computer>
  );
}
