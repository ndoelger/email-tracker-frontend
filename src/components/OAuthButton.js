// OAuthButton.js

import React from 'react';

const OAuthButton = () => {
    const clientId = encodeURIComponent(process.env.REACT_APP_CLIENT_ID);
    const scope = encodeURIComponent(process.env.REACT_APP_SCOPES);
    const redirectUri = encodeURIComponent(process.env.REACT_APP_REDIRECT_URI);

    const authUrl = `https://app.hubspot.com/oauth/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`;

    return <a href={authUrl}>Log in with HubSpot</a>;  // Using an anchor tag for simplicity
};

export default OAuthButton;
