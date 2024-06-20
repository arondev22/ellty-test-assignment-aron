import './styles.css';
import AppCheckBox from '../AppCheckBox';
import { CHECKBOX_VARIANT } from '../../constants';
import { Props } from './interface';

const AppMenu: React.FC<Props> = ({
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