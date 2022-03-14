import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Unimplemented from './pages/Unimplemented';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:category" element={<Menu />} />
        <Route path="/unimplemented" element={<Unimplemented />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
