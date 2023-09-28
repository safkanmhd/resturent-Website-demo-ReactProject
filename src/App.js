
import './App.css';
import { AboutUs,
  Chef,
  findUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,} from './container';
  import { Navbar } from './components';
  import './App.css';

const App =() => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <findUs />
      <Footer />
    </div>
  );
}

export default App;
