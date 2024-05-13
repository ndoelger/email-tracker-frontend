import React from "react";

export const EmailLine = ({ id, subject, preview, title }) => {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{subject}</td>
        <td>{preview}</td>
      </tr>
    </>
  );
};
