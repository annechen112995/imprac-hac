import React from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { Routes } from '../../utils/routes';

import Logo from '../../images/logo.jpg';

export default function LandingPage() {
  const history = useHistory();
  const { addToast } = useToasts();

  return (
    <div className={`
      flex flex-col items-center
      w-full min-h-screen
      bg-blue-100 py-10
    `}>
      <div className="flex items-center w-full grid grid-cols-3">
        <div className="col-span-1 flex flex-row justify-center">
          <img
            className={`w-32 h-32 rounded-xl`}
            src={Logo}
            alt="Close"
          />
        </div>
        <p className={`
          col-span-1 mx-10
          flex flex-row justify-center
          text-2xl font-semibold
        `}>
          All You Can't Eat
        </p>
      </div>

      <p className="mx-32 py-20">
        TODO: Add info text here explaining the website and its usage.
      </p>

      <button
        className={`
          text-white bg-red-400
          border-red-400
          hover:bg-opacity-75
          w-32 md:w-40 lg:w-48
          py-2 md:py-3
          text-sm md:text-base lg:text-lg
          rounded-lg
          my-2
          rounded-lg items-center font-assistant font-extrabold
          transition duration-500 ease-in-out border-2
          hover:border-transparent focus:outline-none
        `}
        onClick={() => {
          addToast(
            `TODO: Show random recipe`,
            { appearance: 'success' }
          );
        }}
      >
        Get Recipe
      </button>
    </div>
  );
}
