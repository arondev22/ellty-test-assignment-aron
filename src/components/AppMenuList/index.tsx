import React from 'react';
import './styles.css';
import AppMenu from '../AppMenu';
import AppButton from '../AppButton';

interface AppButtonProps {
    onSubmit?: (returnedData: any) => void,
    dataList?: any
}

const AppMenuList: React.FC<AppButtonProps> = ({ 
    onSubmit = () => {},
    dataList = [],
}) => {

    const [menuDataList, setMenuDataList] = React.useState(dataList);
    const [isSelectedAll, setIsSelectedAll] = React.useState(false);

    const handleCheckboxChange = (data: any, index: any) => {
        const newMenuDataList = menuDataList.map((d: any, i: any) => {
            if(index === 'all'){
                return {...d, isSelected: !isSelectedAll}
            } else if(i === index){
                return {...d, isSelected: !data.isSelected}
            }
            return {...d}
        })
        setMenuDataList(newMenuDataList);

        if(index === 'all'){
            setIsSelectedAll((prev) => !prev);
        } else {
            const isEmpty = newMenuDataList.filter((i: any) => !i.isSelected);
            setIsSelectedAll(isEmpty.length === 0);
        }
    };

    const handleSubmit = () => {
        onSubmit(menuDataList)
    }

    return (
        <div className='menuListContainer'>
            <AppMenu 
                text="All Pages"
                isChecked={isSelectedAll}
                onChange={() => handleCheckboxChange(null, 'all')}
            />
            <div className='line' style={{marginTop: 10, marginBottom: 15}} />
            {
                menuDataList.length > 0 && (
                    menuDataList.map((data: any, index: any) => {
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
                onClick={handleSubmit}
            />
        </div>
    );
};

export default AppMenuList;