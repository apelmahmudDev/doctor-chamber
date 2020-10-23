import React from 'react';

const BlogPost = ({blog}) => {
    return (
        <div className="card">
            <div className="card-body">
            <div className="d-flex align-items-center">
                <img className="mx-3" src={blog.img} alt="" width="60"/>
                <div>
                    <h6>{blog.authorName}</h6>
                    <small className="text-secondary">{blog.date}</small>
                </div>
            </div>
                <h6 className="py-4">{blog.title}</h6>
                <p className="text-secondary">{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogPost;