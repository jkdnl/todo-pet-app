import React, {useState} from 'react';

interface UseInputProps {
    input: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    resetValue: () => void
}

function useInput(initialValue: string): UseInputProps {
    const [input, setInput] = useState(initialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const resetValue = () => setInput("")

    return {input, onChange, resetValue}
}

export default useInput;