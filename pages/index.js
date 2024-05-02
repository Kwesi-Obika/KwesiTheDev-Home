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

      <Header title="Hello I'm Kwesi Ahoto Obika" />
      <main>
        
        <hr />
        <p className="description">
          I am an environmental technologist <br/>
          
          I am a Developer. (testing)
        </p>
      </main>
      <Footer />
    </div>
  );
}
