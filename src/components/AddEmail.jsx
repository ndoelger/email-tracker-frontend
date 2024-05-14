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
    setEmail({
      name: "",
      subject: "",
      preview: "",
    });
  };

  const handleChange = (evt) => {
    const emailData = { ...email, [evt.target.name]: evt.target.value };
    setEmail(emailData);
  };

  return (
    <>
      <form
        className="w-full max-w-3xl flex justify-between items-center text-black mt-8"
        onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={email.name}
          onChange={handleChange}
          required
          className="flex-1 m-2 p-2 input input-bordered"
          placeholder="Name"
        />
        <input
          type="text"
          name="subject"
          value={email.subject}
          onChange={handleChange}
          required
          className="flex-1 m-2 p-2 input input-bordered"
          placeholder="Subject"
        />
        <input
          type="text"
          name="preview"
          value={email.preview}
          onChange={handleChange}
          required
          className="flex-1 m-2 p-2 input input-bordered"
          placeholder="Preview"
        />
        <button className="m-2 p-2 btn btn-ghost bg-gray-900 text-white">
          Submit
        </button>
      </form>
    </>
  );
};
