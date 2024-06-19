import React from 'react';
import './App.css';
import dummyData from './dummyData.json';
import { AppMenuList } from './components';

function App() {
  
  const [formData, setFormData] = React.useState(dummyData);

  return (
    <div className="container">
      <div className='contentBody'>
        <AppMenuList 
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}

export default App;
