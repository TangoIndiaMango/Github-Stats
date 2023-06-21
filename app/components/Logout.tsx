"use client"

import { removeFromStorage } from '@/utils';
import React from 'react';
import { useRouter } from 'next/navigation';
import './styles.scss'

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the access token from local storage
    removeFromStorage('access_token');

    // Redirect to the login page or home page
    router.push('/'); 
  };

  return (
    <button className= "logout-button" onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
