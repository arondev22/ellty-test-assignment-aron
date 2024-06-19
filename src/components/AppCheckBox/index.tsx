import React, { useState } from 'react';
import './styles.css';
import { GoCheck } from "react-icons/go";

interface CustomCheckboxProps {
    isChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
}

const AppCheckBox: React.FC<CustomCheckboxProps> = ({ 
    isChecked = false, 
    onChange = () => {} 
}) => {
    const toggleCheckbox = () => {
        onChange(!isChecked);
    };

    return (
        <div className="customCheckbox" onClick={toggleCheckbox}>
            <div className={isChecked ? 'checkbox checked' : 'checkbox'} >
                {isChecked ? <GoCheck className='checkboxIcon checkedIcon' /> : <GoCheck className='checkboxIcon' />}
            </div>
        </div>
    );
};

export default AppCheckBox;
