import React from 'react';
import "./rolam.css";
import me from "./me.jpg";

const Rolam = () => {
    return (
        <section className="rolam-container">
            <div className="image">
                <h2 className="about">About Me</h2>
                <img className="me-image" src={me} alt="rólam kép" />
                <p className="rolam-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo iure minima cumque. Odit, aut dolores optio dicta porro, velit suscipit voluptate dolor, ab nisi cumque libero repellat beatae consequuntur?
                Vitae beatae cumque aliquam quae ratione possimus similique nam eos voluptas animi minus minima enim perferendis deleniti sed ipsum distinctio, reprehenderit, quibusdam quia quam aperiam nostrum unde iste suscipit! In?
                Optio temporibus quia laudantium nemo omnis consectetur rerum obcaecati voluptatum nam, possimus, aspernatur molestiae non et tenetur, mollitia dolor eius sit iure. Velit nobis aliquid fuga, nihil distinctio beatae dicta?
                Repudiandae dolor ea facilis porro repellendus tempore odio fugit asperiores eius illo vero nemo, fugiat nisi cupiditate ut modi molestias! Ducimus, voluptas velit aperiam rem doloribus rerum fuga voluptatum eveniet.
                Quaerat, ipsum fugiat nemo error repellat blanditiis possimus aliquid vitae perspiciatis ea dolor delectus reprehenderit pariatur inventore. Quod, cumque commodi accusantium quo, inventore similique quasi minus maiores debitis voluptatem impedit.</p>
            </div>
        </section>  
    )
}

export default Rolam;
