import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150"; // Placeholder image
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 (123) 456-7890";
  const address = "123 Main Street, Springfield, USA";

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
      />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-600 text-center">{address}</p>
    </div>
  );
};

export default Usercard;
