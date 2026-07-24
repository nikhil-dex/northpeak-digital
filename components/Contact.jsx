"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [success, setSuccess] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      alert(
        "Please fill all required fields."
      );
      return;
    }

    //we can now send the form data to either mongodb / postgresql or nodemailer
    console.log("Form submitted:", form);

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section
      className="contact"
      id="contact"
    >
      <div className="contact__head">
        <h2>
          Let's <em>Talk</em>
        </h2>

        <p>
          Ready to build your next
          digital product?
        </p>
      </div>

      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          className="form__field"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className="form__field"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          className="form__field"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
        />

        <textarea
          className="
          form__field
          form__field--area
          "
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button
          className="form__submit"
          type="submit"
        >
          Submit
        </button>

        {success && (
          <div
            className="form__status"
            data-state="ok"
          >
            Message Sent!
          </div>
        )}
      </form>
    </section>
  );
}