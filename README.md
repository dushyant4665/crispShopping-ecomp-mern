# Crisp Shopping - Modern E-Commerce Platform 🛍️

A full-stack e-commerce platform built with the MERN stack, featuring a sleek design, secure payments, and real-time updates. This project demonstrates modern web development practices while maintaining simplicity and user-friendliness.

## 🌟 Features

- **User Experience**
  - Responsive design that works on all devices
  - Smooth animations and transitions
  - Real-time cart updates
  - Intuitive product browsing
  - Dark mode support

- **Shopping Features**
  - Product catalog with categories
  - Smart search functionality
  - Shopping cart management
  - Secure checkout process
  - Order tracking
  - Email subscriptions for updates

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling and responsive design
- **Framer Motion** - Smooth animations
- **Axios** - API communication
- **React Router** - Navigation
- **React Toastify** - User notifications
- **Stripe Checkout** - Payment processing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - Database modeling
- **JWT** - Authentication
- **Stripe API** - Payment gateway
- **Nodemon** - Development server

### Development Tools
- **Git** - Version control
- **VS Code** - Code editor
- **Postman** - API testing
- **MongoDB Compass** - Database management
- **Chrome DevTools** - Debugging

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/crispShopping-ecomp-mern.git
   cd crispShopping-ecomp-mern
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   # Create .env file with:
   # MONGODB_URI=your_mongodb_uri
   # PORT=8000
   # STRIPE_SECRET_KEY=your_stripe_key
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   # Create .env file with:
   # REACT_APP_API_URL=http://localhost:8000
   # REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   npm start
   ```

## 📦 Project Structure

```
crispShopping-ecomp-mern/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── api/          # API configuration
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       ├── redux/        # State management
│       └── assets/       # Images and styles
│
└── server/                # Backend Express application
    ├── config/           # Configuration files
    ├── models/           # Database models
    ├── routes/           # API routes
    └── middleware/       # Custom middleware
```

## 🔧 Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_uri
PORT=8000
NODE_ENV=development
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8000
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## 🛠️ Available Scripts

### Backend
- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm run start:stripe` - Start Stripe server

### Frontend
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

## 🔒 Security Features

- CORS protection
- Input validation
- Secure password hashing

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas
2. Configure environment variables
3. Deploy to Vercel/Heroku

### Frontend Deployment
1. Build the React app
2. Deploy to Vercel/Netlify
3. Configure environment variables
4. Set up custom domain

## 👨‍💻 Author

Dushyant Khandelwal
- Email: dushyantkhandelwal4665@gmail.com
