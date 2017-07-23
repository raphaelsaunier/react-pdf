import React from 'react';
import Markdown from 'react-markdown';
import index from '../../docs/index.md';

const App = () => <Markdown source={index} />;

export default App;
