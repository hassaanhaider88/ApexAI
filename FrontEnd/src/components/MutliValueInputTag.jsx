import React, { useState } from "react";

const MutliValueInputTag = ({ tags, handleTagsChange, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  // Add tag on Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        handleTagsChange([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  // Remove tag
  const removeTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    handleTagsChange(newTags);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
          >
            <span>{tag}</span>
            <button
              type="button"
              className="ml-2 text-purple-500 hover:text-purple-700 font-bold"
              onClick={() => removeTag(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || "Type and hit enter..."}
        className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-2 transition"
      />
    </div>
  );
};

export default MutliValueInputTag;
