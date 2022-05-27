import { Navigate } from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';
import BlogPage from '../pages/BlogPage/BlogPage';
import Error404Page from '../pages/Error404Page/Error404Page';
import HomePage from '../pages/HomePage/HomePage';

export const privateRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/*', element: <Navigate to={<Error404Page />} replace /> },
];
