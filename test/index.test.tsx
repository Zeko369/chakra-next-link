import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, LinkButton, LinkIconButton } from '../src';

describe('it', () => {
  const baseProps = { href: '/foo' };

  it('renders Link without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Link {...baseProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders LinkButton without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LinkButton {...baseProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders LinkIconButton without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LinkIconButton {...baseProps} aria-label="foo" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
