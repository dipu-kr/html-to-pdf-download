import React from "react";

const Instructions = () => {
  return (
    <div className="">
      {/* Left-side card */}
      <div className="">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Instructions (निर्देश)</h2>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="rounded-full bg-blue-500 text-white flex items-center justify-center w-8 h-8 mr-3">
                1
              </div>
              <div>
                <h3 className="font-semibold">Step 1</h3>
                <p>अपना ब्लॉक चुनें</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="rounded-full bg-blue-500 text-white flex items-center justify-center w-8 h-8 mr-3">
                2
              </div>
              <div>
                <h3 className="font-semibold">Step 2</h3>
                <p>अपनी जन्मतिथि दर्ज करें</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-blue-500 text-white flex items-center justify-center w-8 h-8 mr-3">
                3
              </div>
              <div>
                <h3 className="font-semibold">Step 3</h3>
                <p>अपना रोल नंबर दर्ज करें</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
