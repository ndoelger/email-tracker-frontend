import React, { useEffect, useState } from "react";
import { getHubspotLoginUrl, getToken } from "../utilities/user";

export const Login = () => {
  // const [user, setUser] = useState(getToken());

  const [url, setUrl] = useState("");

  useEffect(() => {
    async function fetchUrl() {
      const fetchedUrl = await getHubspotLoginUrl();
      setUrl(fetchedUrl);
    }
    fetchUrl();
  }, []);

  return (
    <header className="App-header">
      <h1>Welcome to Our Application</h1>
      {url && <a href={url}>Login</a>}
    </header>
  );
};
