"use client"

import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

interface HomeProps {
  githubAuthUrl: string;
}

const Home: NextPage<HomeProps> = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');

  const router = useRouter();
  
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/api/github/auth/');
      const githubAuthUrl = response.data.github_auth_url;
      
      console.log(githubAuthUrl);
      if (githubAuthUrl.length > 1) {
        
        window.location.href = githubAuthUrl;
      }
      
    } catch (error) {
      console.error('Authentication Error:', error);
      setLoading(false);
    }
  };
  
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <form className="login-form" onSubmit={handleLogin}>
      <img src="" alt="GitHub Stats" className="logo" />
      <h1 className="title">GitHub Authentication</h1>
      <button type="submit" disabled={loading} className="login-button">
        {loading ? <LoadingSpinner /> : 'Sign in with GitHub'}
      </button>
    </form>
    </main>
  );
};

export default Home;
