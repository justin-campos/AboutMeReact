import './App.css'
import Navbar from './componets/navbar';
import Light from './componets/light';
import Inicio from './componets/inicio';
import Timeline from './componets/timeline';
import Technology from './componets/technology';
import Porjects from './componets/projects';

function App() {

  return (
    <>
      <Light></Light>
      <Navbar />
      <Inicio />
      <Timeline />
      <Porjects />
      {/* <Technology /> */}
    </>
  )
}

export default App
