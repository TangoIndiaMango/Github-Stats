"use client"

import { getFromStorage } from '@/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

interface Collaboration {
  id: number;
  name: string;
  repositoryId: number;
  collaboratorName: string;
  permissionLevel: string;
  // Add other properties as needed
}

const Collaborations = () => {
  const [collaborations, setCollaborations] = useState<Collaboration[]>([]);
  const access = getFromStorage('accessToken');

  useEffect(() => {
    const fetchCollaborations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/github/user/collaborations/', {
          params: {
            access_token: access,
          },
        });
        setCollaborations(response.data);
      } catch (error) {
        console.error('Error fetching collaborations:', error);
      }
    };

    if (access) {
      fetchCollaborations();
    }
  }, [access]);

  return (
      <div>
        <h1>User Collaborations</h1>
        {collaborations.length > 0 ? (
        <ul>
          {collaborations.map((collaboration) => (
            <li>
            <Card
              key={collaboration.id}
              title={collaboration.name}
            />
          </li>
          ))}
        </ul>

        ): (
          <div className="nothing"> User has an Empty Collaboration </div>
        )}
      </div>
    );
};

export default Collaborations;
