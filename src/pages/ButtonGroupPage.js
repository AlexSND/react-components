import React from 'react';
import Button from '../components/Button/Button';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';

const ButtonGroupPage = () => (
    <div>
      <h1>Button group component</h1>
      <h3>1) Horizontal button group</h3>
      <ButtonGroup>
        <Button active>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
      <h3>2) Vertical button group</h3>
      <ButtonGroup vertical>
        <Button>Button</Button>
        <Button active>Button</Button>
        <Button disabled>Button</Button>
      </ButtonGroup>
    </div>
  );

export default ButtonGroupPage;
