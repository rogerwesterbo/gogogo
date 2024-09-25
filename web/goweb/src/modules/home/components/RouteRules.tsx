import { Routes, Route } from 'react-router-dom';
import About from '../../about/components/About';
import Home from '../Home';
import Blogs from '../../blogs/components/Blogs';

function RouteRules() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RouteRules;
