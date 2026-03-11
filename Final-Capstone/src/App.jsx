import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Ppage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/Ppage">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home title="Home Page"
      subtitle="Welcome to our website"
      description="This is our website to promote our upcoming story game, Firewalk" />} />
        <Route path="/about" element={<About game="Firewalk"
      description="A dialogue-driven story where a travelling researcher roams the land collecting samples from a recovering forest."
      mission="To educate people about the affects that wildfires have on our lives." />} />
        <Route path="/Ppage" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

