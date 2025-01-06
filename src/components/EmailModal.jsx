import { useState } from 'react';

export const EmailModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const copyToClipboard = () => {
        const email = document.getElementById('email-to-copy');
        navigator.clipboard.writeText(email.innerText)
            .then(() => {
                setIsOpen(false); 
            })
            .catch((err) => {
                console.error('Erro ao copiar o texto: ', err);
            });
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
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg text-center">
                        <div className='flex'>
                            <button
                                onClick={() => setIsOpen(false)}
                            >
                                <i className="fa-solid fa-x text-xs py-1"></i>
                            </button>
                        </div>
                        <div className='flex gap-2'>
                            <p id="email-to-copy" className="font-bold">rafaelapianezzer@outlook.com</p>
                            <button
                                onClick={copyToClipboard}
                            >
                                <i className="fa-regular fa-copy"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
