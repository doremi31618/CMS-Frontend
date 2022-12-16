import './App.css'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WorksPage from './pages/works';
import AboutmePage from './pages/aboutme';
import LivedemoPage from './pages/articles';
import ArticlePage from './pages/articles';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <WorksPage />
  },
  {
    path: "works",
    element: <WorksPage />
  },
  {
    path: "livedemo",
    element: <LivedemoPage />
  },
  {
    path: "aboutme",
    element: <AboutmePage />
  },
  {
    path: "articles",
    element: <ArticlePage />
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
