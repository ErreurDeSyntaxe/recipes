import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Website based off{' '}
        <a
          className='link'
          target='_blank'
          href='https://www.youtube.com/watch?v=tv6W0Nv5ev0'
        >
          {''}this YouTube video{''}
        </a>
        . Images produced with MidJourney version 4.
      </span>
    </footer>
  );
}

export default Footer;
