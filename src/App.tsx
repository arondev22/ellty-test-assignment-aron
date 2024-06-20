import React from 'react';
import './App.css';
import { dummyData } from './dummyData';
import { AppMenuList, AppMenu } from './components';
import { CHECKBOX_VARIANT } from './constants';

function App() {

  const [isVariant1, setIsVariant1] = React.useState(true);

  const onSubmit = (returnedData: any) => {
    alert(JSON.stringify(returnedData, null, 2));
  }

  return (
    <div className="container">
      <AppMenu 
          text='Checkbox variant 1'
          checkBoxVariant={CHECKBOX_VARIANT.ONE}
          isChecked={isVariant1}
          onChange={() => setIsVariant1(true)}
      />
      <AppMenu 
          text='Checkbox variant 2'
          checkBoxVariant={CHECKBOX_VARIANT.TWO}
          isChecked={!isVariant1}
          onChange={() => setIsVariant1(false)}
      />
      <div style={{height: '50px'}} />
      <AppMenuList 
        checkBoxVariant={isVariant1 ? CHECKBOX_VARIANT.ONE : CHECKBOX_VARIANT.TWO}
        dataList={dummyData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
