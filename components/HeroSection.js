import { Header } from './component/header.jsx';
import styles from './HeroSection.module.css';
import { Title } from './component/Title.jsx';

const HeroSection = ({ children }) => {
  return (
    <section className={styles.hero}>
      <Header />
      <Title />
      {children}
    </section>
  );
};

export default HeroSection;
