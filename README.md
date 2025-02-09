
<p align="center">
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGF0NGI0eG5xYXZpZnRhYWlnY2Rma3IwNG80YWRmMnJubno0aDNtYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/s6tV5ItdF8HDPJN5PR/giphy.gif"/>
</p>

# 🎬NextJS Movie Website

## Overview
A movie catalog website built with MERN, Next.js, and Clerk authentication, featuring various movie collections powered by the TMDB API for seamless browsing.

## Features
- 🎥 **Movie Database Integration**: Powered by [TMDB API](https://www.themoviedb.org/), allowing access to a vast collection of movie titles and metadata.
- 🔐 **User Authentication**: Secure authentication with [Clerk](https://clerk.dev/) supporting **Google, Facebook, and GitHub sign-ins**.
- ⭐ **Personalized Experience**: Users can create and manage their own **list of favorite movies**.
- 🔎 **Advanced Search**: Find any movie from the database with a powerful **search feature**.
- 🎨 **Dynamic UI**: Built-in **light and dark mode themes** with **Tailwind CSS** for a modern and responsive design.
- ⚡ **Fast & Scalable**: Utilizes **Next.js** for the frontend, **MongoDB** for the database, and is deployed on **Vercel** for optimal performance.

## 🚀 Tech Stack
- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication & Metadata Storage**: [Clerk](https://clerk.dev/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🛠 Installation & Setup
### Prerequisites
Ensure you have the following installed:
- ✅ **Node.js** (latest stable version)
- ✅ **MongoDB** (local or cloud instance)

### Steps
1. 📥 Clone the repository:
   ```sh
   git clone https://github.com/yourusername/movie-website.git
   cd movie-website
   ```
2. 📦 Install dependencies:
   ```sh
   npm install
   ```
3. ⚙️ Set up environment variables:
   - Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```
4. ▶️ Start the development server:
   ```sh
   npm run dev
   ```
5. 🌐 Open the project in your browser at `http://localhost:3000`.

## Live Server:
https://next-js-movie-app-three.vercel.app
