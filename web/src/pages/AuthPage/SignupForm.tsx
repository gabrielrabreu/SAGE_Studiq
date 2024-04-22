import React from "react";

const SignupForm: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="bg-gray-300">Item 1.2</div>
      <div className="bg-gray-300">Item 1.3</div>
      <div className="bg-gray-300 col-span-2 mt-2">Item 1.4</div>
      <div className="bg-gray-300 col-span-2 mt-2">Item 1.5</div>
      <div className="col-span-2 grid grid-cols-2 gap-1 mt-2">
        <div className="bg-gray-300">Item 1.6.1</div>
        <div className="bg-gray-300 col-span-2">Item 1.6.2</div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-1 mt-2">
        <div className="bg-gray-300">Item 1.7.1</div>
        <div className="bg-gray-300 col-span-2">Item 1.7.2</div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-1 mt-2">
        <div className="bg-gray-300">Item 1.8.1</div>
        <div className="bg-gray-300 col-span-2">Item 1.8.2</div>
        <div className="bg-gray-300">Item 1.8.3</div>
      </div>
      <div className="bg-gray-300 col-span-2 mt-2">Item 1.9</div>
    </div>
  );
};

export default SignupForm;
