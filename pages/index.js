import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/KwesiFavicon.png" />
      </Head>

      <main>
        <Header title="Hello I'm Kwesi" />
        <hr />
        <p className="description">
          I am a Developer.
        </p>
      </main>
      <Footer />
    </div>
  );
}
