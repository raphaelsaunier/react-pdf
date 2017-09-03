import React from 'react';
import Markdown from 'react-markdown';
import CodeBlock from './components/CodeBlock';
import index from './index.md';

const App = () => <Markdown source={index} renderers={{ CodeBlock }} />;

export default App;
