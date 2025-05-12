import { Routes, Route } from 'react-router-dom';
import {Layout} from './pages/Layout';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Member} from './pages/Member';
import {NoPage} from './pages/Nopage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path= "Home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
         <Route path="/member/:nome" element={<Member />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
