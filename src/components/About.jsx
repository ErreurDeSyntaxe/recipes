import Biography from './Biography';
import Meditations from './Meditations';
import Journaling from './Journaling';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutHeader}>More Information</h2>

      <Biography styles={styles} />
      <Meditations styles={styles} />
      <Journaling styles={styles} />
    </div>
  );
}

export default About;
