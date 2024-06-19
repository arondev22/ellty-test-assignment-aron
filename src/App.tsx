import React from 'react';
import './App.css';
import dummyData from './dummyData.json';
import { AppMenuList } from './components';

function App() {

  const onSubmit = (returnedData: any) => {
    alert(JSON.stringify(returnedData, null, 2));
  }

  return (
    <div className="container">
      <AppMenuList 
        dataList={dummyData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
