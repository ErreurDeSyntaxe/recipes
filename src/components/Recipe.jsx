import { Link } from 'react-router-dom';
import styles from './Recipe.module.css';

function Recipe({ recipe }) {
  return (
    <div className={styles.recipeCard}>
      <p className={styles.cardHeading}>{recipe.title}</p>
      <p className={styles.cardText}>{recipe.para1}</p>

      <Link to={recipe.link} className={styles.cardLink}>
        <img
          src={`./assets/${recipe.img1}`}
          alt={`./assets/${recipe.alt1}`}
          className={styles.cardImg}
        />
        <img
          src={`./assets/${recipe.img2}`}
          alt={`./assets/${recipe.alt2}`}
          className={styles.cardImgHidden}
        />
      </Link>
      <p className={styles.cardText}>{recipe.para2}</p>
      <ul className={styles.cardList}>
        <li className={styles.listItem}>
          <span
            className={
              recipe.iconSize === 'small'
                ? styles.itemIcon
                : styles.itemIconSmall
            }
          >{`${recipe.listIcon}`}</span>{' '}
          <span>{recipe.ingredients[0]}</span>
        </li>
        <li className={styles.listItem}>
          <span
            className={
              recipe.iconSize === 'small'
                ? styles.itemIcon
                : styles.itemIconSmall
            }
          >{`${recipe.listIcon}`}</span>{' '}
          <span>{recipe.ingredients[1]}</span>
        </li>
        <li className={styles.listItem}>
          <span
            className={
              recipe.iconSize === 'small'
                ? styles.itemIcon
                : styles.itemIconSmall
            }
          >{`${recipe.listIcon}`}</span>{' '}
          <span>{recipe.ingredients[2]}</span>
        </li>
        <li className={styles.listItem}>
          <span
            className={
              recipe.iconSize === 'small'
                ? styles.itemIcon
                : styles.itemIconSmall
            }
          >{`${recipe.listIcon}`}</span>{' '}
          <span>{recipe.ingredients[3]}</span>
        </li>
      </ul>
    </div>
  );
}

export default Recipe;
