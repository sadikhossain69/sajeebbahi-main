import './App.css';
import Feature from './components/Feature';
import HeroPart from './components/HeroPart';
import Join from './components/Join';
import Navbar from './components/Navbar';
import OurVision from './components/OurVision';
import SocialIcons from './components/SocialIcons';
import Started from './components/Started';
import bgBanner from './Images/bg-banner.jpg'

function App() {
  return (
    <div style={{backgroundImage: `url(${bgBanner})`,backgroundSize: 'cover'}}className='h-screen text-white'>
      <Navbar/>
      <HeroPart/>
      <SocialIcons/>
      <OurVision />
      <Feature />
      <Join />
      <Started />
    </div>
  );
}

export default App;
