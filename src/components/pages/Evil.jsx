import { Link } from 'react-router-dom';

import recipes from '../../../data/recipes.json';
import Footer from '../Footer';
import sharedStyles from './SharedStyles.module.css';
import styles from './evil.module.css';

const evil = recipes.recipes[2];

function Evil() {
  return (
    <div className={sharedStyles.recipeContainer} style={{ color: '#fff' }}>
      <header>
        <h2 className={styles.headerText} style={{ color: '#000' }}>
          {evil.header.text}
        </h2>
        <img
          src={`./assets/${evil.header.img}`}
          alt={evil.header.alt}
          className={styles.headerImg}
        />
      </header>

      <section className={styles.philosophy}>
        <h3 className={styles.subHeader}>Philosophy</h3>
        <p className={styles.paragraph}>{evil.text.para1}</p>
        <p className={styles.paragraph}>{evil.text.para2}</p>
      </section>

      <section className={styles.recipe}>
        <h3 className={styles.subHeader}>Ingredients</h3>
        <ul className={styles.ingredients}>
          {evil.ingredients.map((ing) => (
            <li key={ing}>
              <span>{evil.listIcon}</span> {ing}
            </li>
          ))}
        </ul>
        <h3 className={styles.subHeader}>Steps</h3>
        <ol className={styles.steps}>
          {evil.steps.map((st) => (
            <li key={st}>{st}</li>
          ))}
        </ol>
        <h3 className={styles.subHeader}>Result</h3>
        <img
          src={`./assets/${evil.result.img}`}
          alt={evil.result.alt}
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

export default Evil;
