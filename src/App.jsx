import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loginpage from './components/login/Loginpage';
import Signup from './components/login/Signup';
import Menu from './components/Pages/Menu';
import RecipeDetail from './components/Pages/RecipeDetail'; 
import About from './components/Pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Hero />
      </div>
    ),
  },
  {
    path: '/login',
    element: <Loginpage />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/menu',
    element: (
      <div>
        <Navbar />
        <Menu />
      </div>
    ),
  },
  {
    path: '/recipe/:name',
    element: (
      <div>
        <Navbar />
        <RecipeDetail />
      </div>
    ),
  },
  {
    path: '/about',
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
