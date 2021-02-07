import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Recipe from "./recipe";
import Logo from "../../images/logo.gif";

export default function LandingPage() {
  const [showRecipe, setShowRecipe] = useState(false);
  const [randIdx, setRandIdx] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div
      className={`
      flex flex-col items-center
      w-full min-h-screen
      bg-blue-100 py-10
    `}
    >
      <div className="flex items-center w-full grid grid-cols-3">
        <div className="col-span-1 flex flex-row justify-center">
          <img className={`w-32 h-32 rounded-xl`} src={Logo} alt="Close" />
        </div>
        <p
          className={`
          col-span-1 mx-10
          flex flex-row justify-center
          text-5xl font-bold
        `}
        >
          All You Can't Eat
        </p>
      </div>

      <p className="mx-32 py-20">
        <h3>
          Not sure what you wanna cook? Click "Get Recipe" below to generate a
          random recipe!
        </h3>
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
          setRandIdx(Math.floor(Math.random() * 5));
          setShowRecipe(true);
          setModalVisible(true);
        }}
      >
        Get Recipe
      </button>

      {showRecipe && randIdx !== -1 && modalVisible && (
        <Modal open={modalVisible} onClose={() => setModalVisible(false)}>
          <Recipe randIdx={randIdx} />
        </Modal>
      )}
    </div>
  );
}
