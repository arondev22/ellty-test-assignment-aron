import './styles.css';
import AppCheckBox from '../AppCheckBox';

interface AppButtonProps {
    text?: string;
    isChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
}

const AppMenu: React.FC<AppButtonProps> = ({
    text = 'Page 1',
    isChecked = false,
    onChange = () => {}
}) => {
    return (
        <div className='listContainer'>
            <div className='textContainer'>
                <text className='headerText'>{text}</text>
                <AppCheckBox isChecked={isChecked} onChange={onChange} />
            </div>
        </div>
    );
};

export default AppMenu;