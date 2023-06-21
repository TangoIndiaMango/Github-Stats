import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.body;
  const response = await axios.post('http://localhost:8000/api/github/auth/', { code });
  res.status(response.status).json(response.data);
}
