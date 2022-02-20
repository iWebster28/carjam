import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const RecordButton = (props) => {
    return (
        <div>
            <Button onClick={props.clickFn} variant="contained" color="success">Record</Button>
        </div>
    );
}

export default RecordButton;