import './App.scss';

import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
