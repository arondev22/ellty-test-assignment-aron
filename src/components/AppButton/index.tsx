import './styles.css';
import { Props } from './interface';

const AppButton: React.FC<Props> = ({ 
    onClick = () => {}, 
    buttonName = 'Done'
}) => {
    return (
        <button 
            className='buttonContainer'
            onClick={onClick}
        >
            {buttonName}
        </button>
    );
};

export default AppButton;