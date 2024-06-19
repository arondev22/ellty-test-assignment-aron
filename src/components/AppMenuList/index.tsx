import React from 'react';
import './styles.css';
import AppMenu from '../AppMenu';
import AppButton from '../AppButton';

interface AppButtonProps {
    onSubmit?: () => void,
    formData?: any,
    setFormData?: any
}

const AppMenuList: React.FC<AppButtonProps> = ({ 
    onSubmit = () => {},
    formData = [],
    setFormData
}) => {

    const [isSelectedAll, setIsSelectedAll] = React.useState(false);

    const handleCheckboxChange = (data: any, index: any) => {
        const newFormData = formData.map((d: any, i: any) => {
            if(index === 'all'){
                return {...d, isSelected: !isSelectedAll}
            } else if(i === index){
                return {...d, isSelected: !data.isSelected}
            }
            return {...d}
        })
        setFormData(newFormData);

        if(index === 'all'){
            setIsSelectedAll((prev) => !prev);
        }
    };

    return (
        <div className='menuListContainer'>
            <AppMenu 
                text="All Pages"
                isChecked={isSelectedAll}
                onChange={() => handleCheckboxChange(null, 'all')}
            />
            <div className='line' style={{marginTop: 12, marginBottom: 15}} />
            {
                formData.length > 0 && (
                    formData.map((data: any, index: any) => {
                        return (
                            <AppMenu 
                                text={data.name}
                                isChecked={data.isSelected}
                                onChange={() => handleCheckboxChange(data, index)}
                            />
                        )
                    })
                )
            }
            <div className='line' style={{marginTop: 12, marginBottom: 20}} />
            <AppButton 
                onClick={() => console.log('1')}
            />
        </div>
    );
};

export default AppMenuList;