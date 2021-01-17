import React from 'react';
import "./recipePost.css";


const RecipePost = ({ title, calories, image, ingredients }) => {
    return (
        <section className="recipePost">
            <div className="containt">
                <h2 className="title">{title}</h2>
                <ul className="ingredient-list">
                    {ingredients.map(ingredient => (
                        <li className="ingredient-item">{ingredient.text}</li>
                    ))}
                </ul>
                <p className="calorie">Calorie={parseInt(calories)}</p>
                <img className="recipePost-image" src={image} alt={image}/>
            </div>
        </section>
    );
}

export default RecipePost;