import React, { FunctionComponent, useState, useEffect } from 'react';

import { Caret, Email, LinkedInFull } from 'assets/icons';

import CodeBlock from 'components/CodeBlock';

const ContactScreen: FunctionComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const code = `const button = document.querySelector('#sendBtn');

const message = {
    name: "${name}",
    email: "${email}",
    message: \`${message}\`
}

button.addEventListener('click', () => {
    form.send(message);
});`;

    return (
        <div className='flex justify-center flex-1'>
            <div className='w-[15%] border-r border-r-line'>
                <div className='flex items-center w-full gap-2 p-2 px-4 border-b border-b-line h-fit'>
                    <Caret
                        height={12}
                        width={12}
                    />

                    <p>
                        contacts
                    </p>
                </div>

                <div className='mb-6'>
                    <button
                        type='button'
                        // onClick={onClick}
                        className='flex items-center w-full gap-2 p-2 px-4 hover:bg-primary-light text-secondary-grey'
                    >
                        <Email
                            height={18}
                            width={18}
                        />

                        <p>
                            syhzrl@gmail.com
                        </p>
                    </button>

                    <button
                        type='button'
                        // onClick={onClick}
                        className='flex items-center w-full gap-2 p-2 px-4 overflow-hidden hover:bg-primary-light text-secondary-grey whitespace-nowrap text-ellipsis'
                    >
                        <LinkedInFull
                            height={18}
                            width={18}
                        />

                        <p>
                            syahzril-aiman
                        </p>
                    </button>
                </div>
            </div>

            <div className='w-[85%] flex'>
                <div className='flex flex-col items-start justify-center w-1/2 gap-6 p-20 border-r border-r-line'>
                    <div className='flex flex-col w-full gap-1 text-secondary-grey'>
                        <p>
                            _name
                        </p>
                        <input
                            type='text'
                            placeholder='Sender name here'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='p-2 bg-transparent border-2 rounded-md outline-none border-line focus:border-secondary-grey placeholder:text-line'
                        />
                    </div>

                    <div className='flex flex-col w-full gap-1 text-secondary-grey'>
                        <p>
                            _email
                        </p>
                        <input
                            type='text'
                            placeholder='Sender email here'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-2 bg-transparent border-2 rounded-md outline-none border-line focus:border-secondary-grey placeholder:text-line'
                        />
                    </div>

                    <div className='flex flex-col w-full gap-1 text-secondary-grey'>
                        <p>
                            _message
                        </p>
                        <textarea
                            placeholder='Sender message (or insult) here'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='p-2 bg-transparent border-2 rounded-md outline-none border-line focus:border-secondary-grey h-[150px] resize-none placeholder:text-line'
                        />
                    </div>

                    <button
                        type='button'
                        className='p-2 text-white transition-colors duration-150 rounded-md bg-button-grey hover:bg-button-grey-hover'
                    >
                        submit-message
                    </button>
                </div>

                <div className='flex flex-col items-center justify-center w-1/2'>
                    <div className='flex w-full p-4 text-md'>
                        <CodeBlock
                            code={code}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactScreen;
