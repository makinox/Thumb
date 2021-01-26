import React from 'react';
import './utils/styles/font.css';
import {GlobalStyles} from './components';
import {ARMprovider} from './utils/context/context';
import Index from './pages';

export default function App() {
  return (
    <ARMprovider>
      <GlobalStyles />
      <Index />
    </ARMprovider>
  );
}
