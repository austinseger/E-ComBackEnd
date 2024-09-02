E-Commerce Back End

This project is a back-end application for an e-commerce site, built using **Express.js**, **Sequelize**, and **PostgreSQL**. The API manages categories, products, and tags, and supports full CRUD operations for each of these resources.

Features

- **RESTful API** for managing categories, products, and tags.
- Full **CRUD functionality**:
  - Create, Read, Update, and Delete categories, products, and tags.
- **Database**: Uses **Sequelize ORM** to interact with a **PostgreSQL** database.
- **Associations**: Categories are associated with products, allowing for rich querying capabilities.

\Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- dotenv (for environment variables)




API Endpoints

Categories
GET /api/categories - Retrieve all categories
GET /api/categories/:id - Retrieve a single category by ID
POST /api/categories - Create a new category
PUT /api/categories/:id - Update a category by ID
DELETE /api/categories/:id - Delete a category by ID

Products
GET /api/products - Retrieve all products
GET /api/products/:id - Retrieve a single product by ID
POST /api/products - Create a new product
PUT /api/products/:id - Update a product by ID
DELETE /api/products/:id - Delete a product by ID

Tags
GET /api/tags - Retrieve all tags
GET /api/tags/:id - Retrieve a single tag by ID
POST /api/tags - Create a new tag
PUT /api/tags/:id - Update a tag by ID
DELETE /api/tags/:id - Delete a tag by ID
Usage
Use tools like Insomnia or Postman to interact with the API endpoints.
The API supports JSON requests and responses.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.




