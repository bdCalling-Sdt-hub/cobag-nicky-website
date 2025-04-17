import React, { useState } from 'react';
import { FiPaperclip, FiSend } from 'react-icons/fi';
import { IoIosRemoveCircle } from 'react-icons/io';

const SendMessage = ({ message, setFiles, setMessage, handleSendMessage }) => {
    const [imagePreview, setImagePreview] = useState(null);

    // Handle file selection and set preview
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFiles(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set preview
            };
            reader.readAsDataURL(file);
        }
    };
    // Handle removing the selected file
    const handleRemoveImage = () => {
        setFiles(null);
        setImagePreview(null);
    };
    return (
        <div>
            <div className="mt-5">
                {/* Input field container */}
                <form onSubmit={handleSendMessage} className="flex items-center gap-3 border-t border-gray-300 pt-2 px-3">
                {/* User profile image (optional) */}
                {imagePreview && (
                    <div className="mt-3 flex flex-col items-center relative">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-10 rounded-xl object-cover mb-2"
                        />
                        <button
                            onClick={handleRemoveImage}
                            className="text-red-500  absolute -top-1 -right-1 text-sm"
                        >
                            <IoIosRemoveCircle className='text-xl' />
                        </button>
                    </div>
                )}
                {/* File input */}
                <label htmlFor="file-input" className="p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700">
                    <input
                        type="file"
                        id="file-input"
                        name="file"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <FiPaperclip />
                </label>

                {/* Text input field */}
                <input
                    type="text"
                    value={message}
                    name="text"
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    id="message-input"
                    placeholder="Type a message..."
                    className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                />

                {/* Send button */}
                <button
                    type="submit"
                    className="p-3 bg-primary text-2xl text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <FiSend />
                </button>
            </form>

            {/* Image Preview */}

        </div>
        </div >
    );
};

export default SendMessage;
