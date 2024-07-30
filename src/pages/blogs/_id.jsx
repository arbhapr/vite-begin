import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Post = () => {
    const post = useLoaderData();

    return (
        <>
            <h2>{post?.title}</h2>
            <div>{post?.body}</div>
        </>
    );
};

export default Post;
