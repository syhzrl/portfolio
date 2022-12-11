import React, { FunctionComponent } from 'react';

const NoFileOpened: FunctionComponent = () => {
    return (
        <div className='flex items-center justify-center flex-1'>
            <p className='text-secondary-grey'>
                Start by opening any files!
            </p>
        </div>
    );
};

export default NoFileOpened;
