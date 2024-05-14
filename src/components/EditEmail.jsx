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
    document.getElementById(`my_modal_${id}`).close();

  };

  const handleChange = (evt) => {
    const emailData = { ...email, [evt.target.name]: evt.target.value };
    setEmail(emailData);
  };

  return (
    <>
      <button
        className="btn btn-ghost btn-m bg-gray-900"
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>
        edit{" "}
      </button>
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="h-1/3 bg-gray-800 flex flex-wrap justify-center align-middle modal-box">
          <h3 className="font-bold text-lg">Edit Email</h3>
          <div className="modal-action">
            <form
              className="grid justify-end justify-items-end"
              onSubmit={handleSubmit}>
              <label>
                Name{" "}
                <input
                  type="text"
                  name="name"
                  value={email.name}
                  onChange={handleChange}
                  required
                  className="w-30 input input-bordered max-w-xs text-black"
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
                  className="w-30 input input-bordered max-w-xs text-black"
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
                  className="w-30 input input-bordered max-w-xs text-black"
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
