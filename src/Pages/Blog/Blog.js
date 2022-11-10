import React from 'react';

const Blog = () => {
    return (
        <div className='m-20 '>
            <h3 className='font-bold'> What is the differences between SQL and NoSQL type database?</h3>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h3 className='font-bold'>What is JWT and how does it work?</h3>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            <h3 className='font-bold'>What is the differences between Js and Node js?</h3>
            <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            <h3 className='font-bold'>How does Node Js hanle multiple requests at the same time?</h3>
            <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>

    );
};

export default Blog;