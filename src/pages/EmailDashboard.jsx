import React from "react";
import { useState, useEffect } from "react";
import { getEmails } from "../utilities/user";

export const EmailDashboard = () => {
  const [emails, setEmails] = useState({});

  const fetchEmails = async () => {
    const response = await getEmails();
    setEmails(response);
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return <div>EmailDashboard</div>;
};
