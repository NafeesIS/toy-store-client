// import React from 'react';
import UseDocumentTitle from '../UseDocumentTitle/UseDocumentTile';
import './Blogs.css'

const Blogs = () => {
    UseDocumentTitle('Toy Store | Blogs');
    return (
        <div className='my_blog'>
            <div className='q1'>
                <h2>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p>
                    An access token and a refresh token are both used for authentication and authorization purposes in client-server architectures, particularly when implementing token-based authentication. Here's an explanation of each:

                    Access Token:

                    An access token is a credential that is issued to a client (such as a web or mobile application) by an authentication server after the client successfully authenticates with valid credentials (e.g., username and password).
                    The access token is typically a short-lived token with a limited lifespan (e.g., 15 minutes to 1 hour). It serves as a proof of the client's identity and is used to access protected resources or perform authorized actions on the server.
                    The client includes the access token in each request to the server, usually in the Authorization header or as a query parameter, to authenticate and authorize the requested operation.
                    Refresh Token:

                    A refresh token is a long-lived token that is also issued to the client alongside the access token during the authentication process.
                    The refresh token is used to obtain a new access token without the need for the client to reauthenticate with the credentials. It provides a way to maintain continuous authentication without frequently prompting the user for credentials.
                    Unlike the access token, the refresh token has a longer expiration time, often days or weeks. When the access token expires, the client can send the refresh token to the server to obtain a new access token.
                </p>
            </div>

            <div className='q2'>
                <h2>Compare SQL and NoSQL databases?</h2>
                <p>
                    SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems, each with its own characteristics and use cases. Here's a comparison of SQL and NoSQL databases:

                    1. Data Model:
                    - SQL: SQL databases follow a relational data model, where data is organized into tables with rows and columns. They enforce a predefined schema, with fixed table structures and relationships between tables.
                    - NoSQL: NoSQL databases use various data models, such as key-value, document, columnar, or graph-based. They are schema-less, meaning each document or record can have its own structure and does not require a fixed schema.

                    2. Scalability:
                    - SQL: SQL databases are vertically scalable, meaning they handle increased load by increasing the server's hardware resources (CPU, RAM, etc.). Scaling can be limited by the capacity of a single server.
                    - NoSQL: NoSQL databases are horizontally scalable, meaning they can handle increased load by distributing data across multiple servers. They can easily scale out by adding more servers to the database cluster.

                    3. Data Querying:
                    - SQL: SQL databases use SQL queries for data retrieval and manipulation. SQL offers powerful querying capabilities with standard operations like SELECT, INSERT, UPDATE, and DELETE. SQL databases are well-suited for complex queries involving multiple tables and relationships.
                    - NoSQL: NoSQL databases have their own query languages or APIs specific to their data models. They often provide simpler and more flexible querying options but may have limitations in complex query capabilities.

                    4. Data Consistency:
                    - SQL: SQL databases emphasize strong data consistency, adhering to ACID (Atomicity, Consistency, Isolation, Durability) principles. Transactions ensure that data remains consistent even in the presence of failures or concurrent access.
                    - NoSQL: NoSQL databases often prioritize availability and scalability over strict consistency. They offer eventual consistency, where data may temporarily be inconsistent across replicas but eventually becomes consistent.

                    5. Use Cases:
                    - SQL: SQL databases are suitable for applications that require complex queries, strict data consistency, and well-defined relationships between entities. They are commonly used for financial systems, e-commerce platforms, and data-intensive applications.
                    - NoSQL: NoSQL databases excel in handling large amounts of unstructured or semi-structured data, rapid data ingestion, and high scalability. They are commonly used in real-time analytics, content management systems, IoT applications, and social networks.

                    It's important to note that these are general comparisons, and the choice between SQL and NoSQL databases depends on the specific requirements of the application, the nature of the data, scalability needs,

                </p>
            </div>
            <div className='q3'>
                <h2>What is express js? What is Nest JS ?</h2>
                <p>

                    Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs. Express.js is known for its simplicity and ease of use, allowing developers to quickly build server-side applications using JavaScript. It offers middleware support, routing, and template engine integration, making it a popular choice for building web applications and APIs in Node.js.

                    .



                </p>
            </div>
            <div className='q4'>
                <h2>What is MongoDB aggregate and how does it work?</h2>
                <p>
                    MongoDB's aggregation framework is a powerful tool for performing advanced data processing and analysis tasks on MongoDB collections. It allows you to perform complex data manipulations, transformations, and aggregations within the database, rather than retrieving the data and performing computations in your application code.


                </p>
            </div>
           
        </div>

    );
};

export default Blogs;