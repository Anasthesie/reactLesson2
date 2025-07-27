import "./App.css";
import { BlogPosts } from "./components/blogposts";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { SiideBar } from "./components/sidebar";
import { Testimonials } from "./components/testimonials";
import "./styles/main.module.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <BlogPosts />
        <Testimonials />
        <SiideBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
