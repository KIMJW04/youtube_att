import React from 'react'

const Loading = () => {
    return (
        // <div id="load">
        //     <div>G</div>
        //     <div>N</div>
        //     <div>I</div>
        //     <div>D</div>
        //     <div>A</div>
        //     <div>O</div>
        //     <div>L</div>
        // </div>
        <div className="loading">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <circle cx="50" cy="37" r="7" />
                <circle cx="62.5" cy="43.5" r="7" />
                <circle cx="62.5" cy="56.5" r="7" />
                <circle cx="50" cy="65" r="7" />
                <circle cx="37.5" cy="56.5" r="7" />
                <circle cx="37.5" cy="43.5" r="7" />
            </svg>
        </div>
    )
}

export default Loading
