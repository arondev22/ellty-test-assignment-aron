import React, { useState } from 'react';
import './styles.css';
import { GoCheck } from "react-icons/go";

interface CustomCheckboxProps {
    label?: string;
    isChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
}

const AppCheckBox: React.FC<CustomCheckboxProps> = ({ label = '', isChecked = false, onChange = () => {} }) => {
    const toggleCheckbox = () => {
        onChange(!isChecked); // Toggle the isChecked state
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
