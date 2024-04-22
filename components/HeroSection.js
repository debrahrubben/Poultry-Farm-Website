// components/HeroSection.js
import { Header } from './component/header.jsx';

const HeroSection = ({ children }) => {
  const heroStyles = {
    height: '100vh',
    position: 'relative',
    backgroundImage: 'url(https://res.cloudinary.com/dgpxvazru/image/upload/v1713731356/Poultry/1f7e832cd6d8485de92a2fd2602923f7_sdnmkv.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const overlayStyles = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    filter: 'blur(5px)',
    zIndex: -1,
    opacity: 0.7,
  };

  return (
    <section style={heroStyles}>
      <div style={overlayStyles}></div>
      <Header />
      {children}
    </section>
  );
};

export default HeroSection;
