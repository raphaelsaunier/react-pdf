import React from 'react';
import Markdown from 'react-markdown';
import Nav from '../components/Nav';
import Heading from '../components/Heading';
import CodeBlock from '../components/CodeBlock';
import CornerGraphics from '../static/images/corner-graphics.png';
import DocumentGraphic from '../static/images/document-graphic.png';
import index from '../index.md';

const Home = () =>
  <main className="flex">
    <img src={CornerGraphics} alt="" className="absolute t0 r0" />

    <Nav style={{ width: '240px' }} />

    <section className="p4" style={{ flex: 1 }}>
      <Heading />
      <img
        src={DocumentGraphic}
        alt=""
        className="my3"
        style={{ width: '210px' }}
      />
      <Markdown source={index} renderers={{ CodeBlock }} />
    </section>
  </main>;

export default Home;
