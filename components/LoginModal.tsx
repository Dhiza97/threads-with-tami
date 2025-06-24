"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginModal = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => {
          const dialog = document.getElementById(
            "my_modal_3"
          ) as HTMLDialogElement | null;
          if (dialog) dialog.showModal();
        }}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="***********"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                type="button"
              >
                Sign In
              </button>

              <p className="text-xs">OR</p>

              {/* Sign In with Google */}
              <button
                className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 rounded focus:outline-none focus:shadow-outline flex items-center bg-gray-300 cursor-pointer"
                type="button"
              >
                <FcGoogle className="text-2xl" />
              </button>
              </div>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default LoginModal;