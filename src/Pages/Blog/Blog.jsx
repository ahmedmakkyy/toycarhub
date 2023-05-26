import React from 'react';
import Titles from '../../Helmet/Titles';

const Blog = () => {
    return (
        <div className="flex flex-col items-center">
           <Titles title='ToyCarHub | Blog'></Titles>
  <div className="w-full md:w-2/3">
    <div className="card p-3 mt-3">
      <h4 className="text-lg font-bold mb-2">
        Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?
      </h4>
      <p>
        Answer: A refresh token only helps re-validate a user without them having to re-enter their login credentials multiple times and the access token is re-issued, provided the refresh token.

        Refresh tokens allow you to balance web users access needs with site's security practices. Access tokens help users get the resources they need to complete their tasks and also expose site to data compromise.
      </p>
    </div>
    <div className="card p-3 mt-3">
      <h4 className="text-lg font-bold mb-2">
        Question 2: Compare SQL and NoSQL databases?
      </h4>
      <p>
        Answer: SQL databases are vertically scalable and NoSQL databases are horizontally scalable. SQL databases are table-based but NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions. On the other hand NoSQL is better for unstructured data.
      </p>
    </div>
    <div className="card p-3 mt-3">
      <h4 className="text-lg font-bold mb-2">
        Question 3: What is express js? What is Nest JS?
      </h4>
      <p>
        Answer: Express is a node js web application framework that provides broad features for building web and mobile applications. NestJS is newer framework that provides additional features.
      </p>
    </div>
    <div className="card p-3 mt-3">
      <h4 className="text-lg font-bold mb-2">
        Question 4: What is MongoDB aggregate and how does it work?
      </h4>
      <p>
        Answer: It's a way of processing a large number of documents in a collection by means of passing them through different stages. The MongoDB aggregation pipeline is a sequence of stages that process and transform data in MongoDB collections. Each stage applies a specific operation to the input documents and passes the results to the next stage and allowing for advanced data analysis and manipulation.
      </p>
    </div>
  </div>
</div>

    );
};

export default Blog;