import React from "react";
import { useState, useEffect } from "react";
import { getEmails } from "../utilities/user";
import { EmailLine } from "../components/EmailLine";

export const EmailDashboard = () => {
  const [emails, setEmails] = useState({});

  const fetchEmails = async () => {
    const response = await getEmails();
    setEmails(response);
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Subject</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {emails ? (
              emails.map((email) => (
                <EmailLine
                  key={email.id}
                  id={email.id}
                  subject={email.subject}
                  preview={email.preview}
                  title={email.title}
                />
              ))
            ) : (
              <span className="loading loading-dots loading-lg"></span>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
