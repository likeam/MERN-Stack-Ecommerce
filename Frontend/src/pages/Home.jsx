import Hero from "../components/Hero"
import Offer from "../components/Offer";
import Popular from '../components/Popular';
import NewCollections from "../components/NewCollections";
import NewsLetter from "../components/NewsLetter";


function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </>
  )
}

export default Home