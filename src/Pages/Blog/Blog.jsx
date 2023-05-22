
const Blog = () => {
    return (
        <div className="p-10">
            <div className="mt-10">
                <h3 className="text-2xl"><span className="font-bold text-2xl">Question 1:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h3>
                <p className="text-xl"><span className="font-bold text-xl">Answer 1:</span><p>Refresh token  just helps you re-validate a user without them having to re-enter their login credentials multiple times.  </p>
        <p> Access token :The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. </p>
        <p>User Authentication: The user provides their credentials (e.g., username and password) to the authentication server or an identity provider. <br />
            Access Token Issuance: Upon successful authentication, the server generates an access token and includes it in the response to the client application. <br />
           Refresh Token Usage:  When the access token expires, the client application sends the refresh token to the authentication server to request a new access token. <br />
           Access Tokens: Access tokens should be stored securely to prevent unauthorized access. They are typically stored in memory (RAM) rather than on disk to minimize the risk of exposure. Web applications often store access tokens in browser memory (e.g., JavaScript variables) or as HTTP-only cookies with the "secure" and "sameSite" attributes.

        </p></p>

            </div>

            {/* ***************** */}
            <div className="mt-10">
                <h3 className="text-2xl"><span className="font-bold text-2xl">Question 2:</span> Compare SQL and NoSQL databases?
                </h3>
                <p className="text-xl"><span className=" text-xl font-bold">Answer 2:</span><p>SQL  databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based. <br />
    NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p></p>

            </div>

            {/* ********************* */}
            <div className="mt-10">
                <h3 className="text-2xl"><span className="font-bold text-2xl">Question 3:</span> What is express js? What is Nest JS?</h3>
                <p className="text-xl"><span className="font-bold text-xl">Answer 3:</span><p>Express js  is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. <br />
           Nest js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
        </p></p>

            </div>
            {/* ************************ */}
            <div className="mt-10 mb-5">
                <h3 className="text-2xl"><span className="font-bold text-2xl">Question 4:</span>What is MongoDB aggregate and how does it work ?</h3>
                <p className="text-xl"><span className="font-bold text-xl">Answer 4:</span><p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. <br />
           Match Stage: The $match stage is typically used as the first stage in the pipeline. It filters the documents based on specified criteria, similar to the find method. <br />
            Project Stage: Project Stage: The $project stage is used to reshape the documents in the pipeline. It can include or exclude specific fields, create new fields, or perform computations to derive new values. <br />
             Limit and Skip Stages:  The $limit and $skip stages are used to limit the number of documents returned or to skip a certain number of documents.
        </p></p>

            </div>


        </div>
    );
};

export default Blog;