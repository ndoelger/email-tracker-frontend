import React from "react";
import { useState, useEffect } from "react";
import { getEmails } from "../utilities/requests";
import { EmailLine } from "../components/EmailLine";
import { AddEmail } from "../components/AddEmail";

export const EmailDashboard = () => {
  const [emails, setEmails] = useState(null);

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
              <th>Name</th>
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
                  name={email.name}
                />
              ))
            ) : (
              <span className="loading loading-dots loading-lg"></span>
            )}
          </tbody>
        </table>
      </div>
      <AddEmail fetchEmails={fetchEmails} />
    </>
  );
};
