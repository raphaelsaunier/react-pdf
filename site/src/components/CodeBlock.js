import React from 'react';
import Icon from './Icon';

const CodeBlock = props =>
  <pre className="bg-black">
    <div>
      <Icon type="eye" />
      <Icon type="files-o" />
    </div>
    <code>
      {props.literal}
    </code>
  </pre>;

CodeBlock.propTypes = {
  literal: React.PropTypes.string.isRequired,
};

export default CodeBlock;
