"use client"


import { getFromStorage } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useRouter } from "next/navigation";

type UserProfile = {
  avatar_url: string;
  name: string;
  bio: string;
  blog: {
    email: string | null
  }
  location: string;
  url: string;
  company: string;
  created_at: string
};

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const access = getFromStorage("accessToken")


  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/github/user/', {
          params: {
            access_token: access,
          },
        });
        setProfile(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };
    if (access) {
      fetchRepositories();
    }
  }, [access]);

  return (
    <div>
      {profile ? (
        <div className="container">
          <h1 className="user">User Profile</h1>
          <div className="userDetails">
            <img className="image" src={profile.avatar_url} alt="Profile Picture" />
            <div className="userInfo">
              <h1 className="name">Name: {profile.name}</h1>
              <h2>Bio: {profile.bio}</h2>
              <h2>Email: {profile.blog.email}</h2>
              <h2>Company: {profile.company}</h2>
              <h2>Location: {profile.location}</h2>
              <h2>Joined: {profile.created_at}</h2>
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                <h3 className="profile-url">Visit My GitHub Profile</h3>
              </a>

            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Profile;