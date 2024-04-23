
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import { Card } from "../components/component/card.jsx";
import { Organic } from "../components/component/organic.jsx";

export default function Home() {
  return (
    <div style={{backgroundColor:'#F6F5F2'}}>
<HeroSection />
<Services />
<Card />
<Organic />
    </div>
  );
}
