import marcusImg from '/src/assets/marcus-aurelius.jpg';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <h1 className={styles.headerTitle}>The Best Man to Ever Live</h1>

      <img
        src={marcusImg}
        alt="MidJourney representation of Marcus Aurelius, Emperor Philosopher"
        className={styles.headerImg}
      />

      <blockquote className={styles.headerQuotationContainer}>
        <p className={styles.headerQuotation}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stoicism takes the position that
          the wise, the good man, the philosopher is a man who lives in
          accordance with nature. He fears only abdicating his moral
          responsibility. He is not afraid of pain. He is not afraid of death.
          He is not afraid of poverty. He is not afraid of any of the
          vicissitudes of the Human Condition. He fears only that he should let
          himself down and that he should be less than a complete human being.
        </p>

        <footer className={styles.headerQuotationAuthor}>
          &mdash; Dr Michael Sugrue{' '}
          <a
            className="link"
            href="https://www.youtube.com/watch?v=Auuk1y4DRgk"
            target="_blank"
            rel="noopener noreferrer"
          >
            (source)
          </a>
        </footer>
      </blockquote>
    </header>
  );
}

export default Header;
