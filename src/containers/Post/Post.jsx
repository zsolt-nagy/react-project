import React, {useState, useEffect} from 'react';
import RecipePost from '../../components/RecipePost/RecipePost';
import FormComponent from '../../components/Form/FormComponent';
import "./post.css";


const Post = () => {

    const APP_ID = "4338538b";
    const APP_KEY = "b738481f71034832196fde78c9d6ea91";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    
    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
  }
    
    return (
        <div className="blogContainer">
            <FormComponent  search={search} setQuery={setQuery} setSearch={setSearch}/>
            <div className="postContainer">
                {recipes.map(recipe => (
                    <RecipePost
                    key={recipe.recipe.label}
                    title={recipe.recipe.label} 
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>           
        </div>
    )
}

export default Post;
