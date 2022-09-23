import React from "react";

interface InputProps {
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?: "text" | "password" | "email"
}

const TextInput: React.FC<InputProps> = ({ onChange, placeholder, value, type = "text" }) => {

    return (
        <input
            className="w-full outline-0 px-2 py-1 rounded border-2 border-gray-500/20 my-2 focus:border-gray-500/60 transition-all"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextInput;