import React from 'react';
import './App.css';
import dummyData from './dummyData.json';
import { AppMenuList, AppMenu } from './components';

function App() {

  const [isVariant1, setIsVariant1] = React.useState(false);

  const onSubmit = (returnedData: any) => {
    alert(JSON.stringify(returnedData, null, 2));
  }

  return (
    <div className="container">
      <AppMenu 
          text='Checkbox variant 1'
          checkBoxVariant='variant-1'
          isChecked={isVariant1}
          onChange={() => setIsVariant1(!isVariant1)}
      />
      <AppMenu 
          text='Checkbox variant 2'
          checkBoxVariant='variant-2'
          isChecked={!isVariant1}
          onChange={() => setIsVariant1(!isVariant1)}
      />
      <div style={{height: '50px'}} />
      <AppMenuList 
        checkBoxVariant={isVariant1 ? 'variant-1' : 'variant-2'}
        dataList={dummyData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
