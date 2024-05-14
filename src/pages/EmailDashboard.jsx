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
      <div className="overflow-x-auto bg-gray-800 text-white p-6 flex flex-col items-center justify-center min-h-screen">
        {emails ? (
          <>
            <table className="table">
              <thead className="text-white">
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                {emails.map((email) => (
                  <EmailLine
                    key={email.id}
                    id={email.id}
                    subject={email.subject}
                    preview={email.preview}
                    name={email.name}
                    fetchEmails={fetchEmails}
                  />
                ))}
              </tbody>
            </table>
            <AddEmail fetchEmails={fetchEmails} />
          </>
        ) : (
          <span className="loading loading-dots loading-xlg m-auto"></span>
        )}
      </div>
    </>
  );
};
