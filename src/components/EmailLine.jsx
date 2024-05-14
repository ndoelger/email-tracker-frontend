import React from "react";
import { removeEmail } from "../utilities/requests";
import { EditEmail } from "./EditEmail";

export const EmailLine = ({ id, subject, preview, name, fetchEmails }) => {
  const deleteEmail = async () => {
    await removeEmail(id);
    await fetchEmails();
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{subject}</td>
        <td>{preview}</td>
        <td>
          <button onClick={deleteEmail} className="btn btn-square btn-outline bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
        <td>
          <EditEmail
            id={id}
            subject={subject}
            preview={preview}
            name={name}
            fetchEmails={fetchEmails}
          />
        </td>
      </tr>
    </>
  );
};
