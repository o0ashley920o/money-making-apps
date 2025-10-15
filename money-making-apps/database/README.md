# Database Setup and Usage Documentation

This README file provides information on setting up and using the database for the Money Making Apps project.

## Overview

The database is designed to store information related to various online money-making opportunities, user profiles, and their interactions with the application. It serves as the backbone for both the frontend and backend components of the project.

## Database Schema

The database schema is defined in the `schema.sql` file located in this directory. It includes tables for:

- Users: Stores user profile information and authentication details.
- Opportunities: Contains details about various money-making opportunities.
- User Opportunities: Tracks user interactions with opportunities, such as completions and interests.

## Setup Instructions

1. **Database Installation**: Ensure you have a PostgreSQL database installed and running on your machine.

2. **Create Database**: Create a new database for the Money Making Apps project. You can do this using the following command in your PostgreSQL shell:
   ```sql
   CREATE DATABASE money_making_apps;
   ```

3. **Run Schema**: Execute the `schema.sql` file to set up the necessary tables and relationships. You can do this by running:
   ```bash
   psql -U your_username -d money_making_apps -f schema.sql
   ```

4. **Configuration**: Update your backend application configuration to connect to the newly created database. Ensure that the connection string in your backend code points to the `money_making_apps` database.

## Usage

Once the database is set up, the backend application will interact with it to perform CRUD operations related to users and opportunities. Ensure that your backend server is running to handle requests and manage data effectively.

## Conclusion

This database is a crucial component of the Money Making Apps project, enabling efficient data management and user interaction. For any issues or further assistance, please refer to the backend documentation or reach out to the development team.