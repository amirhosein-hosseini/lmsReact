"use client"
import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { getCookie , deleteCookie , setCookie } from '../api/auth';
import { prefix, url } from '../api/domain';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie('token')); 
  const navigate = useNavigate();
  const token = getCookie('token');
  const [status , setStatus] = useState(null);

  const signOut = () => {
    axios.post(url + prefix + 'logout' , null , {
      headers : {
          'Authorization' : 'Bearer ' + token,
      }
    })
      .then((response) => {
          console.log(response)
          deleteCookie('token');
          setIsLoggedIn(false);
          navigate('/login')
      })
      .catch((error) => {
          console.log(error);
      });
  };


  const signIn = (token) => {
    setCookie('token', token , 7);
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn  , signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext easily
export const useAuth = () => {
  return useContext(AuthContext);
};