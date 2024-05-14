import React from "react";
import { useState } from "react";
import { updateEmail } from "../utilities/requests";

export const EditEmail = ({ id, name, preview, subject, fetchEmails }) => {
  const [email, setEmail] = useState({
    name,
    preview,
    subject,
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await updateEmail(id, email);
    await fetchEmails();
  };

  const handleChange = (evt) => {
    const emailData = { ...email, [evt.target.name]: evt.target.value };
    setEmail(emailData);
  };

  return (
    <>
      <button
        className="btn btn-ghost btn-xs"
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>
        edit{" "}
      </button>
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form className="grid" onSubmit={handleSubmit}>
              <label>
                Name{" "}
                <input
                  type="text"
                  name="name"
                  value={email.name}
                  onChange={handleChange}
                  required
                  className="w-30 input input-bordered max-w-xs"
                />
              </label>

              <label>
                First Name{" "}
                <input
                  type="text"
                  name="subject"
                  value={email.subject}
                  onChange={handleChange}
                  required
                  className="w-30 input input-bordered max-w-xs"
                />
              </label>

              <label>
                Last Name{" "}
                <input
                  type="text"
                  name="preview"
                  value={email.preview}
                  onChange={handleChange}
                  required
                  className="w-30 input input-bordered max-w-xs"
                />
              </label>

              <button className="text-blue-600 btn" type="submit">
                Edit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
