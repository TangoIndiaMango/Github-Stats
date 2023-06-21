import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  try {
    const response = await axios.post('http://localhost:8000/api/github/auth/', { code });
    console.log('Response:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Callback Error:', error);
    res.status(500).json({ error: 'Callback Error' });
  }
}
