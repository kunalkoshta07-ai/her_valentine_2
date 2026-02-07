import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/message.css';

export default function MessageSend() {

    const [isSent, setIsSent] = useState("Send");
    const [messageInput, setMessageInput] = useState("");
    const isButtonDisabled = messageInput.trim() === '';

    const navigate2 = useNavigate();

    const handleSubmitMessage = (event) => {
        event.preventDefault();
        if (isButtonDisabled) return;
        setIsSent("Sent");
        const messageToPass = messageInput.trim();
        setMessageInput('');

        navigate2('/endpage', { state: { message: messageToPass } });
    }

    return (
        <div className="message-form flex items-center justify-around flex-col gap-5">
            <div className="text-area">
                <textarea
                    className='area-text w-[19.5rem] sm:w-[26rem] lg:w-[29.8rem] h-36 sm:h-48 lg:h-60 text-slate-600 font-bold p-4 rounded-lg shadow-lg hover:shadow-xl active:shadow-none duration-200 placeholder:text-slate-400'
                    name=""
                    id=""
                    placeholder='Message here...'
                    onChange={(e) => setMessageInput(e.target.value)}
                    value={messageInput}
                />
            </div>
            <div className="button-send">
                <button
                    className={`send-button w-fit h-fit ${isButtonDisabled ? 'opacity-30' : ''}`}
                    disabled={isButtonDisabled}
                    onClick={handleSubmitMessage}
                >
                    <div
                        className={`button-text px-7 py-3 border-2 rounded-xl text-xl bg-transparent bg-gradient-to-tr from-[#3a6186] to-[#89253e] text-gray-200 shadow-xl shadow-pink-500 ${isButtonDisabled ? '' : 'hover:scale-110 active:scale-90'} duration-100 mb-8 sm:mb-4 rotate-6`}>
                        {isSent}
                    </div>
                </button>
            </div>
        </div>
    );
}
