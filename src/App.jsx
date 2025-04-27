import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/sections/Layout"

function App() {
  return (
    <>
    

<BrowserRouter>
<Layout>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/service" element={<Services />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Layout>
</BrowserRouter>

</>
  );
}

export default App;
