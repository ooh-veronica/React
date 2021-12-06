import './App.css';
import Header from './SamplePade.js/Header';
import Asside from './SamplePade.js/Asside';
import ContentCounter from './SamplePade.js/Content';
import Footer from './SamplePade.js/Footer';
import Counter from './SamplePade.js/Counter';


function App() {
  return (
    <div>
      <div className="allContent">
        <Header></Header>
        <Asside></Asside>
        <ContentCounter></ContentCounter>
        <Footer></Footer>
      </div>
      <div>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
