import React from 'react';
import './App.css';
import { AppButton, AppCheckBox } from './components';

function App() {
  const [isChecked, setIsChecked] = React.useState(false);

    const handleCheckboxChange = (isChecked: boolean) => {
        setIsChecked(isChecked);
    };

  return (
    <div className="container">
      <div className='contentBody'>
        <AppButton />
        <AppCheckBox 
          label="Custom Checkbox"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}

export default App;
