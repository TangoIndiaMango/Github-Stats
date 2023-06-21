"use client"

import { getFromStorage } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";


interface Repository {
    id: number;
    name: string;
    description: string;
    language?: string;
    created_at?: string;
    
};
  


const Repositories = () => {
    const [repositories, setRepositories] = useState<Repository []>([]);
    const access = getFromStorage("accessToken")

  
    useEffect(() => {
      const fetchRepositories = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/github/user/repositories/', {
            params: {
              access_token: access,  
            },
          });
          console.log(response.data)
          setRepositories(response.data);
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
        <h1>User Repositories</h1>
        {repositories.length > 0 ? (
        <ul>
          {repositories.map((repository) => (
            <li>
            <Card
              key={repository.id}
              title={repository.name}
              description={repository.description}
              language={repository.language}
              created_at={repository.created_at}
            />
          </li>
          ))}
        </ul>

        ): (
          <div> User has an Empty Repository </div>
        )}
      </div>
    );
  };

export default Repositories;