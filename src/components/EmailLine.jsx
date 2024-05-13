import React from "react";

export const EmailLine = ({ id, subject, preview, name }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{subject}</td>
        <td>{preview}</td>
      </tr>
    </>
  );
};
