import React, { useState } from 'react';
import './styles.css';
import { GoCheck } from "react-icons/go";

interface CustomCheckboxProps {
    isChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
    variant?: string
}

const AppCheckBox: React.FC<CustomCheckboxProps> = ({ 
    isChecked = false, 
    onChange = () => {},
    variant = 'variant-2'
}) => {
    const toggleCheckbox = () => {
        onChange(!isChecked);
    };

    return (
        <div className={variant === 'variant-1' ? "customCheckbox" : "customCheckbox-variant-2"} onClick={toggleCheckbox}>
            {
                variant === 'variant-1' ? (
                    <div className={isChecked ? 'checkbox checked' : 'checkbox'} >
                        {isChecked ? <GoCheck className='checkboxIcon checkedIcon' /> : <GoCheck className='checkboxIcon' />}
                    </div>
                ) : (
                    <div className={isChecked ? 'checkbox-variant-2 checked-variant-2' : 'checkbox-variant-2'} >
                        {isChecked ? <GoCheck className='checkboxIcon-variant-2 checkedIcon-variant-2' /> : <GoCheck className='checkboxIcon-variant-2' />}
                    </div>
                )
            }
        </div>
    );
};

export default AppCheckBox;
