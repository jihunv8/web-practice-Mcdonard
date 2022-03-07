import './App.scss';

import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className="temp">임시 본문</section>
      <Footer />
    </div>
  );
};

export default App;
