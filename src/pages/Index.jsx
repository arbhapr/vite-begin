import { useState, useEffect } from "react";
import postData from "../blogs.json";
import Article from "../components/Article";
import Search from "../components/Search";

const Homepage = () => {
    const [posts, setPosts] = useState(postData);
    const [totalPosts, setTotalPosts] = useState(postData.length);
    const onSearchChange = (value) => {
        const lowerValue = value?.toLowerCase();
        const filteredPosts = postData.filter((item) =>
            item.title.toLowerCase().includes(lowerValue)
        );
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    };

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
            {posts.map((props, index) => {
                return <Article {...props} key={index} />;
            })}
        </>
    );
};

export default Homepage;
