import React from 'react';
import './App.css';
import dummyData from './dummyData.json';
import { AppMenuList } from './components';

function App() {
  
  const [formData, setFormData] = React.useState(dummyData);

  return (
    <div className="container">
      <AppMenuList 
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default App;
