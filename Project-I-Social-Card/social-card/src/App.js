import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className='Container'>
    <HeaderContainer />
    <CardContainer onClick="window.open('http://www.reactjs.org')"/>
    </div>
  );
};

export default App;
