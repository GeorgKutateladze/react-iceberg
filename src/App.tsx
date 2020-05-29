import React from 'react';
import './App.css';
import IcebergTop from "./components/IcebergTop/IcebergTop";
import IcebergBottom from "./components/IcebergBottom/IcebergBottom";
import DeepWaters from "./components/DeepWaters/DeepWaters";
import NavigationPoints from "./components/NavigationPoints/NavigationPoints";

function App() {
    return (
        <div className="App">
            <NavigationPoints/>
            <IcebergTop/>
            <IcebergBottom/>
            <DeepWaters/>
        </div>
    );
}

export default App;
