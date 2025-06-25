import recipes from '../../../data/recipes.json';
import Footer from '../Footer';
import styles from './Worry.module.css';

const worry = recipes.recipes[2];

function Worry() {
  return (
    <div className={styles.recipeContainer} style={{ color: '#fff' }}>
      <header>
        <h2 className={styles.headerText} style={{ color: '#000' }}>
          {worry.header.text}
        </h2>
        <img
          src={`./assets/${worry.header.img}`}
          alt={worry.header.alt}
          className={styles.headerImg}
        />
      </header>

      <section className={styles.philosophy}>
        <h3 className={styles.subHeader}>Philosophy</h3>
        <p className={styles.paragraph}>{worry.text.para1}</p>
        <p className={styles.paragraph}>{worry.text.para2}</p>
      </section>

      <section className={styles.recipe}>
        <h3 className={styles.subHeader}>Ingredients</h3>
        <ul className={styles.ingredients}>
          {worry.ingredients.map((ing) => (
            <li key={ing}>
              <span>{worry.listIcon}</span> {ing}
            </li>
          ))}
        </ul>
        <h3 className={styles.subHeader}>Steps</h3>
        <ol className={styles.steps}>
          {worry.steps.map((st) => (
            <li key={st}>{st}</li>
          ))}
        </ol>
        <h3 className={styles.subHeader}>Result</h3>
        <img
          src={`./assets/${worry.result.img}`}
          alt={worry.result.alt}
          className={styles.result}
        />
      </section>

      <button className={styles.btnHome}>Home</button>

      <Footer />
    </div>
  );
}

export default Worry;
