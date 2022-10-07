import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Timer from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Timer/>
  </StrictMode>
);
