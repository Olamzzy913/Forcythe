import Head from "next/head";
import Hero from "@/components/Hero/hero";
import Blog from "@/components/Blog/blog";
import Footer from "@/components/Footer/footer";
import Service from "@/components/Service/service";
import Solution from "@/components/Solutions/solution";
import Boarding from "@/components/Boarding/boarding";
import Achievement from "@/components/Solutions/achievement";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <title>
          Forcythe - Your Partner in Scalable Building Growth | Digital
          Solutions
        </title>
      </Head>
      <Hero />
      <Boarding />
      <Service />
      <Solution />
      <Achievement />
      <Blog />
      <Footer />
    </>
  );
}
