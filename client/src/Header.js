// import { Link } from 'react-router-dom';
// import { useContext, useEffect } from 'react';
// import { UserContext } from './UserContext';
// import Navigation from './Navigation';

// export default function Header() {
//   const { setUserInfo, userInfo } = useContext(UserContext);

//   useEffect(() => {
//     fetch('http://localhost:4000/profile', {
//       credentials: 'include',
//     }).then((response) => {
//       response.json().then((userInfo) => {
//         setUserInfo(userInfo);
//       });
//     });
//   }, [setUserInfo]);

//   function logout() {
//     fetch('http://localhost:4000/logout', {
//       credentials: 'include',
//       method: 'POST',
//     });
//     setUserInfo(null);
//   }

//   const username = userInfo?.username;

//   return (
//     <header>
//       <Link to="/" className="logo">Blogosphere</Link>
//       <nav>
//         {username && (
//           <>
//             {/* <span>Hello, {username}</span> */}
//             <Link to="/create">Create New Post</Link>
//             <a onClick={logout}>Log Out</a>
//           </>
//         )}
//         {!username && (
//           <div className="auth-buttons">
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">Blogosphere</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}