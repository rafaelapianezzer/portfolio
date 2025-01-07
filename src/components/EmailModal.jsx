import { useState } from 'react';

export const EmailModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const copyToClipboard = () => {
        const email = document.getElementById('email-to-copy');
        navigator.clipboard.writeText(email.innerText)
            .then(() => {
                setIsOpen(false);
            });
    };

    const handleOverlayClick = (e) => {
        // Verifica se o clique foi no overlay (fora do modal)
        if (e.target.id === 'modal-overlay') {
            setIsOpen(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-neutral-900 dark:bg-neutral-50 rounded-[5px] px-3 py-1"
            >
                <i className="fa-regular fa-envelope text-2xl text-neutral-50 dark:text-neutral-900"></i>
            </button>

            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                    onClick={handleOverlayClick}
                >
                    <div className="flex gap-2 justify-center items-center bg-neutral-200 dark:bg-neutral-200 p-4 rounded-lg text-center">
                        <p id="email-to-copy" className="font-bold text-purple-900">rafaelapianezzer@outlook.com</p>
                        <button
                            onClick={copyToClipboard}
                        >
                            <i className="fa-regular fa-copy text-lg text-neutral-600"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
