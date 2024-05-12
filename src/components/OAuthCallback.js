// OAuthCallback.js

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const OAuthCallback = () => {
  const history = useHistory();

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        // Assuming the backend sends the tokens as a direct response
        const { data } = await axios.get('http://localhost:3001/user/oauth-callback', {
          params: new URLSearchParams(window.location.search)
        });

        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          history.push('/dashboard'); // redirect to dashboard or another appropriate page
        }
      } catch (error) {
        console.error('Error retrieving access token:', error);
        history.push('/login-error'); // Handle errors, e.g., by redirecting to an error page
      }
    };

    fetchTokens();
  }, [history]);

  return <div>Loading...</div>;
};

export default OAuthCallback;
