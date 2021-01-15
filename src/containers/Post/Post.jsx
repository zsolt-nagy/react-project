import React, {useState, useEffect} from 'react';
import BlogPost from '../../components/BlogPost/BlogPost';
import FormComponent from '../../components/Form/FormComponent';
import "./post.css";

const Post = () => {
    const [post, setPost] = useState([]); 
    const [query, setQuery] = useState("Business");
    


    const fetchPost = async () => {   
            const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${query}&country=hu&apiKey=a2bbeb28b32041398f965db3d1cdb8d7`)
            const data = await response.json();
            setPost(data.articles);
    }

    useEffect(() => {    
        fetchPost(); 
        const reqOptions = { 'mode': 'cors', headers: { 'Access-Control-Allow-Origin': '*' } };
        // eslint-disable-next-line react-hooks/exhaustive-deps           
    }, [query]);

    return (
        <div className="blogContainer">
            <div className="postContainer">
                <FormComponent text={setQuery}/>
                { post.length > 0 ?  post.map(news => (
                <BlogPost 
                    key={news.title}
                    title={news.title}
                    date={news.publishedAt}
                    image={news.urlToImage}
                    description={news.description} 
                    full = {news.url} 
                />
                )) : (
                    <div>loading...</div>
                )}
            </div>           
        </div>
    )
}

export default Post;
