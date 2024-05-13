import React, { useState } from "react";
import { addEmail } from "../utilities/requests";

export const AddEmail = ({ fetchEmails }) => {
  const [email, setEmail] = useState({
    name: "",
    subject: "",
    preview: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await addEmail(email);
    await fetchEmails();
    // setEmail({
    //   name: "",
    //   subject: "",
    //   preview: "",
    // });
  };

  const handleChange = (evt) => {
    const emailData = { ...email, [evt.target.name]: evt.target.value };
    setEmail(emailData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={email.name}
          onChange={handleChange}
          required
          className="w-30 input input-bordered max-w-xs"
          placeholder="Name"
        />
        <input
          type="text"
          name="subject"
          value={email.subject}
          onChange={handleChange}
          required
          className="w-30 input input-bordered max-w-xs"
          placeholder="Subject"
        />
        <input
          type="text"
          name="preview"
          value={email.preview}
          onChange={handleChange}
          required
          className="w-30 input input-bordered max-w-xs"
          placeholder="Preview"
        />

        <button className="btn btn-ghost btn-xs">submit</button>
      </form>
    </>
  );
};
