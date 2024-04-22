import styles from './Title.module.css';

export function Title() {
  return (
    <div className={styles.title}>
      <h1>Welcome to</h1>
      <h2>Cartus Agriculture</h2>
      <p>Quietly Brilliant</p>
      <p className={styles.absolute}>Since 2017</p>
    </div>
  );
}

