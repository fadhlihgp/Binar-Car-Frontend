import {Spinner} from "react-bootstrap";
import React from "react";

interface SpinnerLoading {
    text: string
}

const SpinnerLoading = ({text = "Loading"}: SpinnerLoading) => {
    return(
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
            <Spinner style={{ position: 'absolute', top: '50%', left: '50%'}} />
            <div style={{ position: 'absolute', top: '55%', left: '47%', color:'white'}} >{text}</div>
        </div>
    )
}
export default SpinnerLoading
