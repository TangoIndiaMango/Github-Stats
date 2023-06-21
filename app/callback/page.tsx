"use client"

import axios from 'axios';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { saveToStorage } from '@/utils';

const Page = ({ searchParams }: any) => {
  const router = useRouter();
  const params = searchParams;

  useEffect(() => {
    const handleCallback = async () => {
      const code = params.code;
      try {
        const response = await axios.post('http://localhost:8000/api/github/auth/', { code });
        console.log('Response:', response.data);
        const { access_token } = response.data;

        // Save the access token in the local storage
        saveToStorage("accessToken", access_token)

        // Redirect to the mainpage
        router.push('./mainpage');
      } catch (error) {
        console.error('Callback Error:', error);
      }
    };

    if (params.code) {
      handleCallback();
    }
  }, [params.code, router]);

  return <></>;
};

export default Page;



