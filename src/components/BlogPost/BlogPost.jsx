import React from 'react';
import "./blogPost.css";


const BlogPost = ({ description, date, image, title, full }) => {
    return (
        <section className="blogPost">
            <div className="blogHeader" id="blogHeader">
                <span>Featured</span>
                <h1>{title}</h1>
                <span>{date}</span>
            </div>
            <div className="image">
                <img className="blog-image" src={image} alt="news API jpg"/>
            </div>
            <article className="content">{description}</article>
            <a href={`${full}`} target="_blank" rel="noreferrer noopener">Olvass Tovább!</a>
        </section>
    )
}

export default BlogPost;