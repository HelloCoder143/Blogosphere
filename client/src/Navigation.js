import { Link } from 'react-router-dom';

export default function Navigation({ isLoggedIn, userInfo, logout }) {
  return (
    <nav>
      {isLoggedIn && userInfo ? (
        <>
          <span>Hello, {userInfo.username}</span>
          <Link to="/create">Create New Post</Link>
          <a onClick={logout}>Log Out</a>
        </>
      ) : (
        <div className="auth-buttons">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  );
}
