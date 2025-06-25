import { Link } from 'react-router-dom';

import recipes from '../../../data/recipes.json';
import Footer from '../Footer';
import sharedStyles from './SharedStyles.module.css';
import styles from './Death.module.css';

const death = recipes.recipes[3];

function Death() {
  return (
    <div className={sharedStyles.recipeContainer} style={{ color: '#fff' }}>
      <header>
        <h2 className={styles.headerText} style={{ color: '#000' }}>
          {death.header.text}
        </h2>
        <img
          src={`./assets/${death.header.img}`}
          alt={death.header.alt}
          className={styles.headerImg}
        />
      </header>

      <section className={styles.philosophy}>
        <h3 className={styles.subHeader}>Philosophy</h3>
        <p className={styles.paragraph}>{death.text.para1}</p>
        <p className={styles.paragraph}>{death.text.para2}</p>
      </section>

      <section className={styles.recipe}>
        <h3 className={styles.subHeader}>Ingredients</h3>
        <ul className={styles.ingredients}>
          {death.ingredients.map((ing) => (
            <li key={ing}>
              <span>{death.listIcon}</span> {ing}
            </li>
          ))}
        </ul>
        <h3 className={styles.subHeader}>Steps</h3>
        <ol className={styles.steps}>
          {death.steps.map((st) => (
            <li key={st}>{st}</li>
          ))}
        </ol>
        <h3 className={styles.subHeader}>Result</h3>
        <img
          src={`./assets/${death.result.img}`}
          alt={death.result.alt}
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

export default Death;
