'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function SubscriptionForm() {
  const { theme, setTheme } = useTheme();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.firstName && form.lastName && form.email && form.consent) {
      // Send form data here (e.g. API call)
      console.log('Form Submitted:', form);
      setSubmitted(true);
    } else {
      alert('Please fill all required fields and give consent.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-center py-40">
      <h2 className="text-4xl mb-2">Join the Conversations</h2>
      <p className="text-gray-600 mb-8">Get the content you need, just when you need it</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className={theme === "dark" ? "block text-left text-sm mb-1 text-lightGreen" : "block text-left text-sm mb-1"}>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className={theme === "dark" ? "w-full border-b border-lightGreen outline-none py-2" : "w-full border-b border-darkCharcoal outline-none py-2"}
                required
              />
            </div>

            <div className="flex-1">
              <label className={theme === "dark" ? "block text-left text-sm mb-1 text-lightGreen" : "block text-left text-sm mb-1"}>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className={theme === "dark" ? "w-full border-b border-lightGreen outline-none py-2" : "w-full border-b border-darkCharcoal outline-none py-2"}
                required
              />
            </div>
          </div>

          <div>
            <label className={theme === "dark" ? "block text-left text-sm mb-1 text-lightGreen" : "block text-left text-sm mb-1"}>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={theme === "dark" ? "w-full border-b border-lightGreen outline-none py-2" : "w-full border-b border-darkCharcoal outline-none py-2"}
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className={"appearance-none w-4 h-4 border" + (theme === "dark" ? " border-lightGreen" : " border-darkCharcoal")}
              required
            />
            <label className="text-sm text-left">
              Yes, subscribe me to your newsletter. *
            </label>
          </div>

          <button
            type="submit"
            className={
              theme === "dark"
                ? "px-8 py-2 rounded-full btn liquid font-light text-lightGreen border-lightGreen"
                : "px-8 py-2 rounded-full btn liquid font-light"
            }
          >
            Subscribe
          </button>
        </form>
      ) : (
        <p className="text-green-600 text-lg">Thank you for subscribing!</p>
      )}
    </div>
  );
}