import { Link } from 'react-router-dom';

import recipes from '../../../data/recipes.json';
import Footer from '../Footer';
import sharedStyles from './SharedStyles.module.css';
import styles from './Hardships.module.css';

const hardships = recipes.recipes[0];

function Hardships() {
  return (
    <div className={sharedStyles.recipeContainer}>
      <header>
        <h2 className={styles.headerText}>{hardships.header.text}</h2>
        <img
          src={`./assets/${hardships.header.img}`}
          alt={hardships.header.alt}
          className={styles.headerImg}
        />
      </header>

      <section className={styles.philosophy}>
        <h3 className={styles.subHeader}>Philosophy</h3>
        <p className={styles.paragraph}>{hardships.text.para1}</p>
        <p className={styles.paragraph}>{hardships.text.para2}</p>
      </section>

      <section className={styles.recipe}>
        <h3 className={styles.subHeader}>Ingredients</h3>
        <ul className={styles.ingredients}>
          {hardships.ingredients.map((ing) => (
            <li key={ing}>
              <span style={{ fontSize: '20px' }}>{hardships.listIcon}</span>{' '}
              {ing}
            </li>
          ))}
        </ul>
        <h3 className={styles.subHeader}>Steps</h3>
        <ol className={styles.steps}>
          {hardships.steps.map((st) => (
            <li key={st}>{st}</li>
          ))}
        </ol>
        <h3 className={styles.subHeader}>Result</h3>
        <img
          src={`./assets/${hardships.result.img}`}
          alt={hardships.result.alt}
          className={styles.result}
        />
      </section>

      <Link to="/" className={sharedStyles.btnHome}>
        Home
      </Link>

      <Footer />
    </div>
  );
}

export default Hardships;
