import Hero from "./Hero";
import NavbarMenu from "../../components/layout/Navbar";
import AppFooter from "../../components/layout/AppFooter";

function Home() {
  return (
    <div className="home-page">
      <NavbarMenu />
      <Hero />
      <AppFooter />
    </div>
  );
}

export default Home;
