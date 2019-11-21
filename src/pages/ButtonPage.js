import React from 'react';
import Button from '../components/Button/Button';

const ButtonPage = () => (
    <div>
      <h1>Button component</h1>
      <h3>1) Simple button</h3>
      <Button>Button</Button>
      <h3>2) Button with onClick</h3>
      <Button onClick={() => {alert('!!!!')}}>Button</Button>
      <h3>3) Button active</h3>
      <Button active>Button</Button>
      <h3>4) Button disabled</h3>
      <Button disabled>Button</Button>
      <h3>5) Button link</h3>
      <Button href='#'>Link</Button>
      <h3>6) Button link disabled</h3>
      <Button href='#' disabled>Link</Button>
    </div>
  );

export default ButtonPage;
