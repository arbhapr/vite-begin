import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
    const posts = useLoaderData()

    return (
        <>
            <h2>My Blog Posts</h2>
            <ul>
                {posts.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/blog/${item.id}`}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Blog;
