import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Indonesia from "../components/Indonesia/Indonesia";
import data from "../utils/constants/provinces"
import Provinces from "../components/Provinces/Provinces";
import { useState } from "react";
import Form from "../components/Form/Form";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces)
  return (
    <main>
      <Hero />
      <Indonesia />
      <Provinces provinces={provinces} />
      <Form provinces={provinces} setProvinces={setProvinces}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
