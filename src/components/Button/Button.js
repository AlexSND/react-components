import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.scss'

const Button = ({
  children,
  className,
  onClick,
  disabled,
  active,
  ...attrs
}) => {
  const classes = classNames(
    'btn',
    {className},
    {active},
  )

  const Tag = attrs.href ? 'a' : 'button'

  const onClickAction = e => {
    if (disabled) {
      e.preventDefault()
    } else {
      return onClick(e)
    }
  }

  return (
    <Tag
      className={classes}
      onClick={onClickAction}
      disabled={disabled}
      { ...attrs }
    >
      {children}
    </Tag>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
}

Button.defaultProps = {
  children: 'Button',
  className: '',
  onClick: () => {},
  disabled: false,
  active: false,
}

export default Button
