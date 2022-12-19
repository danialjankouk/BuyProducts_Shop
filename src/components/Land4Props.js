import React from 'react';

const Land4Props = ({number, text}) => {
    return (
        <div className='dark:bg-slate-600 bg-slate-300 w-56 py-5 flex flex-col justify-center items-center rounded-md'>
            {/* number */}
            <h1 className='font-bold text-white text-xl'>{number}</h1>
            {/* title */}
            <p className='text-violet-400 text-sm'>{text}</p>
        </div>
    );
};

export default Land4Props;