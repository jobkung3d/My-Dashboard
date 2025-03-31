import Image from "next/image";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <div className="flex-grow text-center p-10">
          <h3 className="text-5xl">NextJS Dashboard</h3>
          <p>Become Full-Stack developer with NextJS</p>
        </div>
        <Footer />
      </Container>
    </main>
  );
}
