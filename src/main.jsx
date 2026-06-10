/**
 * This is the entry point to the app
 */
import './styles/main.less';

import React from 'react';
import { createRoot } from 'react-dom/client';
import GalaxyPage from './galaxy/galaxyPage.jsx';

createRoot(document.getElementById('app')).render(<GalaxyPage />);
