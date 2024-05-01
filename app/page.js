
import { Card } from "../components/component/card.jsx";
import { Organic } from "../components/component/Organic.jsx";
import { Gallery } from "../components/component/Gallery.jsx";
import { AboutUs} from "../components/AboutUs.js";
import { Footer} from "../components/component/Footer.jsx";
import { HeroSection } from "../components/HeroSection.js";
import { Services } from "../components/component/Services.jsx";

export default function Home() {
  return (
  <div style={{backgroundColor:'#DDDDDD'}}>
   <HeroSection />
   <Services />
   <Card />
   <br />
   <Organic />
   <Gallery />
   <AboutUs />
   <Footer />
   <div style={{ background: 'linear-gradient(to right, #8f2e37, #d48e52)', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}></div>
    </div>
  );
}
