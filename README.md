# Blog Management System

## Overview

This project is a blog management system consisting of a React frontend, a Django backend, and an AWS RDS database. Users can create, update, delete, and view blog posts.

## Project Structure
│
├── frontend/ # React frontend application
│ ├── src/
│ ├── public/
│ └── package.json
│
├── backend/ # Django backend application
│ ├── blog/
│ ├── blog_management/
│ ├── manage.py
│ └── requirements.txt
│
└── README.md


## Prerequisites

- Node.js and npm (for React)
- Python and pip (for Django)
- AWS account (for deployment)
- AWS CLI and Elastic Beanstalk CLI (for deployment)

## Frontend Setup (React)

1. **Navigate to the frontend directory:**

   ```bash
   cd myblogfrontend

   npm install
   
   npm run build

    ```

## Backend Setup (Django)

    ```bash
    cd myblogproject


    python -m venv venv
    source venv/bin/activate  #Windows:venv\Scripts\activate

    pip install -r requirements.txt

    python manage.py migrate

    python manage.py runserver
    
    ```


## API Endpoints

    Backend:
        POST /api/blogs/ - Create a new blog.
        GET /api/blogs/ - List all blogs.
        GET /api/blogs/{id}/ - Retrieve a specific blog.
        PUT /api/blogs/{id}/ - Update a specific blog.
        DELETE /api/blogs/{id}/ - Delete a specific blog


## Running Locally

    Frontend: Run npm start in the frontend directory.
    Backend: Run python manage.py runserver in the backend directory.

## Contact

For any questions or issues, please contact bilaltahir567@gmail.com



