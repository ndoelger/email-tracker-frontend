import React, { useEffect, useState } from "react";
import { getUrl } from "../utilities/requests";

export const Login = () => {
  // GETS THE OAUTH EMAIL FROM THE BACKEND
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function fetchUrl() {
      const fetchedUrl = await getUrl();
      setUrl(fetchedUrl);
    }
    fetchUrl();
  }, []);

  return (
    <div className="App">
      <header className="App-header bg-gray-800 text-white p-6 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to The Email Tracker 😁
        </h1>
        {url && (
          <a href={url} className="text-xl underline">
            Login
          </a>
        )}
      </header>
    </div>
  );
};
