import Link from "next/link";
import styles from './Header.module.css'; // Import the CSS module

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          alt="Cartus Logo"
          className={styles.logo}
          src="https://res.cloudinary.com/dgpxvazru/image/upload/v1713805297/Poultry/photo-20240419-172616-1_2x_jwgqxw.png"
        />
        <div className={styles.text}>
          <div className={styles.boldText}>CARTUS</div>
          <div className={styles.subText}>Quietly Brilliant</div>
        </div>
      </div>
      <div className={styles.links}>
        <a className={styles.linkItem} href="#">
          <PhoneIcon className={styles.icon} />
          <span className={styles.phoneNumber}href="#">055836127</span>
        </a>
        <a className={styles.linkItem} href="#">
          <MailboxIcon className={styles.icon} />
          <span className={styles.mailText}href="#">Mail Us</span>
        </a>
        <Link className={styles.link} href="#">
          Our Services
        </Link>
        <Link className={styles.link} href="#">
          Why Us
        </Link>
        <Link className={styles.link} href="#">
          About Us
        </Link>
      </div>
    </header>
  );
}

function MailboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
