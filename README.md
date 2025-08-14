# Final Real Estate Project

This is a full-stack real estate application built with React (frontend) and Node.js (backend). It allows users to browse, search, and manage real estate listings.

https://real-estate-qzrp.onrender.com/
## Features
- User authentication (Google OAuth and JWT)
- Create, update, and delete property listings
- Search and filter properties
- Responsive and visually appealing UI

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
- Node.js installed on your machine
- MongoDB connection string
- Firebase project for Google OAuth

---

### 1. Clone the Repository
```bash
git clone https://github.com/sairajp88/FINAL_REALESTATE.git
cd FINAL_REALESTATE
```

---

### 2. Set Up Environment Variables
#### Backend:
Create a `.env` file in the root directory and add the following:
```properties
MONGO=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=3000
```

#### Frontend:
Create a `.env` file in the `client` directory and add:
```properties
VITE_FIREBASE_API_KEY=<your_firebase_api_key>
```

---

### 3. Install Dependencies
#### Backend:
```bash
npm install
```

#### Frontend:
```bash
cd client
npm install
```

---

### 4. Run the Development Servers
#### Backend:
```bash
npm run dev
```

#### Frontend:
```bash
cd client
npm run dev
```

---

### 5. Access the Application
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

---

### 6. Build for Production (Optional)
To build the frontend for production:
```bash
npm run build --prefix client
```

---

## Deployment
To deploy the project, ensure the environment variables are properly configured on your hosting platform (e.g., Vercel, Netlify, or Heroku).
Building a Real Estate website using the MERN stack involves creating a full-stack application with MongoDB, Express.js, React.js, and Node.js. Here's a breakdown of the key features you can implement: 

### User Authentication: 

Allow users to register and log in.
Ensure that certain features, like adding listings or favoriting properties, are accessible only to authenticated users.

## CRUD Operations:

### Create:

Implement a form to allow users to add new property listings. This form should include details like property name, address, description, price, type (sale or rent), number of bedrooms, bathrooms, etc.

### Read:

Display property listings on the homepage or on a dedicated listings page. Each listing should show key information and a link to view more details.

### Update

Allow users to edit their own property listings. Include validation to ensure data consistency.

### Delete

Provide an option for users to delete their listings.

### Search and Filters:

Implement a search bar to allow users to search for properties based on keywords like location, type, or price range.
Include filters for refining search results, such as filtering by property type, number of bedrooms, bathrooms, etc.

### Image Upload:

Allow users to upload images for their property listings. Display these images in a gallery or carousel on the listing details page.

### User Dashboard

Provide a user dashboard where users can manage their property listings, view favorites, and edit their profile.

### Responsive Design

This website is responsive, making it accessible and user-friendly across various devices, including desktops, tablets, and mobile phones.

### Error Handling and Validation

Implement thorough error handling and validation on the server and client sides to ensure data integrity and a smooth user experience.

### Pagination

If you have a large number of listings, implement pagination to improve page load times and the user experience.

## API End Points! 🚀🔗

Here's a list of the API endpoints:

### User Routes

Sign-Up: `/api/user/signup` (POST)

Sign-In: `/api/user/signin` (POST)

Google Sign-In: `/api/user/google` (POST)

Sign-Out: `/api/user/signout` (GET)

Get User: `/api/user/:id` (GET)

Update User: `/api/user/update/:id` (POST)

Delete User: `/api/user/delete/:id` (DELETE)

Get User Listings: `/api/user/listings/:id` (GET)

### Listing Routes

Create Listings: `/api/listing/create` (POST)

Update Listings: `/api/listing/update/:id` (POST)

Delete Listings: `/api/listing/delete/:id` (DELETE)

Get Single Listing: `/api/listing/get/:id` (GET)

Get Listings: `/api/listing/get` (GET)



