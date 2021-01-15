import React, {useState, useEffect} from 'react';
import BlogPost from '../../components/BlogPost/BlogPost';
import FormComponent from '../../components/Form/FormComponent';
import "./post.css";
import axios from "axios";

const Post = () => {
    const [post, setPost] = useState([]); 
    const [query, setQuery] = useState("Business");  

    /* const fetchPost = async () => {   
            const response = await fetch(`/v2/top-headlines?category=${query}&country=hu&apiKey=a2bbeb28b32041398f965db3d1cdb8d7`)
            const data = await response.json();
            setPost(data.articles);
    }
 */
    useEffect(() => {  
        axios.get(`/v2/top-headlines?category=${query}&country=hu&apiKey=a2bbeb28b32041398f965db3d1cdb8d7`)
        .then(response => {
            const post = response.data.articles;
            setPost(post);
        })  
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
