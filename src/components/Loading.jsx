import React from 'react';

const Loading = () => {
    return (
        <div className='position-absolute w-100 h-100 z-30 bg-black d-flex justify-content-center align-items-center'>
            <div class="spinner-border text-light" style={{width: "7rem", height: "7rem"}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;