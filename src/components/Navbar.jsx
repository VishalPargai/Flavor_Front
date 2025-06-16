import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useState , useEffect } from 'react';
const Navbar = () => {
   const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/login');
    alert("YOU HAVE BEEN LOGGED OUT");
  };

  const handleSignupLogin = () => {
    navigate('/signup');
  };
  const handleLogin = () => {
    navigate('/login');
  };
  const gotomenu= ()=>{
    navigate('/menu')
  }
  const gotohome= ()=>{
    navigate('/')
  }
  const gotoabout= ()=>{
    navigate('/about')
  }
  return (
    <nav className="navbar">
      <div className="logo">FlavorFront</div>

      <ul className="nav-links">
        <li><a href="#" onClick={gotohome}>Home</a></li>
        <li><a href="#" onClick={gotomenu}>Menu</a></li>
        <li><a href="#" onClick={gotoabout}>About</a></li>
      </ul>

      <div>
          {user ? (
            <div className='btns'>
              <span className="username-display login-button">
                <FaUser className='icon' /> {user.username}
              </span>
              <button onClick={handleLogout} className='login-button'>Logout</button>
            </div>
          ) : (
            <div className='two-btns'>
              <button className='login-button'>

                <span onClick={handleSignupLogin} className='twobtns' >Sign Up</span> / <span onClick={handleLogin} className='twobtns'>Login</span></button>
            
            </div>

          )}
        </div>
    </nav>
  );
};

export default Navbar;
