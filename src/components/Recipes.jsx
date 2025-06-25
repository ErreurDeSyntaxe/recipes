import styles from './Recipes.module.css';
import recipes from '../../data/recipes.json';
import Recipe from './Recipe';

function Recipes() {
  return (
    <main>
      <h2 className={styles.recipesHeader}>Stoic Recipes for a Better Life</h2>
      <div className={styles.recipesContainer}>
        {recipes.recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.listIcon} />
        ))}
      </div>
    </main>
  );
}

export default Recipes;
