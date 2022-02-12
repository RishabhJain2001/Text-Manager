import React from 'react';

function DarkMode(props) {

    const toggleBlueMode = () => {
        props.changeColors('rgb(151, 0, 0)', 'whitesmoke');
    }
    const toggleBlackMode = () => {
        props.changeColors('rgb(8, 8, 8)', 'white');
    }
    const toggleVioletMode = () => {
        props.changeColors('rgb(55, 10, 78)', 'white');
    }
    return (
        (props.mode === 'dark') && <div>
            <input className="form-check-inp color-1" onClick={toggleBlueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <input className="form-check-inp color-2" onClick={toggleBlackMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <input className="form-check-inp color-3" onClick={toggleVioletMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        </div>
    );
}

export default DarkMode;
