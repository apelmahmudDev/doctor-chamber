import React from 'react';
import './Blogs.css';
import BlogPost from '../BlogPost/BlogPost';
import person1 from '../../../images/person1.png';

const Blogs = () => {
    const blogData = [
        {
            key: 1,
            img: person1,
            authorName: 'Dr. Caudi',
            date: '23 Apr 2020',
            title: '2 times of brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium?'
        },
        {
            key: 2,
            img: person1,
            authorName: 'Dr. Caudi',
            date: '23 Apr 2020',
            title: '2 times of brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium?'
        },
        {
            key: 3,
            img: person1,
            authorName: 'Dr. Caudi',
            date: '23 Apr 2020',
            title: '2 times of brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium?'
        }
    ];
    return (
        <section className="blogs-container mt-5 pt-5">
            <div className="container">
                <div className="text-center mb-5 pb-5">
                    <h5 className="text uppercase" style={{color:'#6ACECE'}}>Our Blogs</h5>
                    <h1 style={{color:'#3A4256'}}>From Our Blogs News</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="card-deck">
                        {
                            blogData.map(blog => <BlogPost 
                                blog={blog} 
                                key={blog.key}
                                ></BlogPost>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;