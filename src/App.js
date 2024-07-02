import React from 'react';
import BlocklistManager from './BlocklistManager';
import ErrorBoundary from './ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <BlocklistManager />
  </ErrorBoundary>
);

export default App;
