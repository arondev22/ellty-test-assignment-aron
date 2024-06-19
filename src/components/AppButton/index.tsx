import './styles.css';

interface AppButtonProps {
    onClick?: () => void;
    buttonName?: string;
}

const AppButton: React.FC<AppButtonProps> = ({ 
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