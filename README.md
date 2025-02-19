<div align="center">
 
  
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Movie Database - Discover any movie in the world and checkout what's trending</h3>
</div>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
<img width="1916" alt="image" src="https://github.com/user-attachments/assets/9927a270-3811-4771-bb05-487210dc97b8" />

## Introduction

Movie Database is an innovative movie browsing and discovery platform built using React.js, integrated with Appwrite for backend services, and styled with TailwindCSS. The application utilizes a sophisticated algorithm for showcasing trending movies, enhancing user experience with dynamic content delivery.

## Tech Stack

- **React.js** - For building the user interface.
- **Appwrite** - Backend server for handling API requests and database management.
- **Tailwind CSS** - For designing a responsive and modern UI.

## <a name="features">🔋 Features</a>

👉 **Browse All Movies**: Explore a wide range of movies available on the platform.

👉 **Search Movies**: Easily search for specific movies using a search function.

👉 **Trending Movies Algorithm**: Displays trending movies based on a dynamic algorithm.

👉 **Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.

👉 **Responsiveness**: Fully responsive design that works seamlessly across devices.

and many more, including code architecture and reusability


## Quick Start
**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
VITE_IMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

Replace the placeholder values with your actual **[TheMovieDatabase API](https://developer.themoviedb.org/reference/intro/getting-started)** and **[Appwrite](https://apwr.dev/JSM050)** credentials. You can obtain these credentials by signing up on the [TheMovieDatabase](https://developer.themoviedb.org/reference/intro/getting-started) and creating a new project on the [Appwrite](https://apwr.dev/JSM050)


**Prerequisites**
- Git
- Node.js
- npm

**Cloning and Installation**
```bash
git clone https://github.com/pbsvk/moviedatabase.git
cd MovieDatabase
npm install
npm run dev
