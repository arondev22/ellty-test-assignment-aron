import './styles.css';
import AppCheckBox from '../AppCheckBox';
import { CHECKBOX_VARIANT } from '../../constants';

interface AppButtonProps {
    text?: string;
    isChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
    checkBoxVariant?: string
}

const AppMenu: React.FC<AppButtonProps> = ({
    text = 'Page 1',
    isChecked = false,
    checkBoxVariant = CHECKBOX_VARIANT.ONE,
    onChange = () => {}
}) => {
    return (
        <div className='listContainer'>
            <div className='textContainer'>
                <text className='headerText'>{text}</text>
                <AppCheckBox variant={checkBoxVariant} isChecked={isChecked} onChange={onChange} />
            </div>
        </div>
    );
};

export default AppMenu;