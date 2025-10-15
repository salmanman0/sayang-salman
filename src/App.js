import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [noButtonStyle, setNoButtonStyle] = useState({
    position: "absolute",
    top: "50%",
    left: "60%",
    transition: "all 0.3s ease",
  });

  const moveNoButton = () => {
    const randomTop = Math.random() * 80 + 10; // dari 10%–90%
    const randomLeft = Math.random() * 80 + 10;
    setNoButtonStyle({
      position: "absolute",
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      transition: "all 0.3s ease",
    });
  };

  const handleYes = () => {
    alert("Awww 😍 Salman Ananda M. S juga sayang kamu!");
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100 relative overflow-hidden">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-center relative w-[90%] max-w-md">
            <h1 className="text-xl font-bold mb-6 text-gray-800">
              Apakah kamu mencintai <span className="text-pink-500">Salman</span>?
            </h1>
            <div className="flex justify-center gap-6 relative h-32">
              <button
                onClick={handleYes}
                className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-all"
              >
                Iya 💖
              </button>
              <button
                style={noButtonStyle}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg"
              >
                Tidak 💔
              </button>
            </div>
          </div>
        </div>
      )}

      {!showModal && (
        <h1 className="text-3xl font-bold text-pink-600 animate-bounce">
          💕 Aw aw aw disya cayang abang celamanya 💕
        </h1>
      )}
    </div>
  );
}

export default App;
