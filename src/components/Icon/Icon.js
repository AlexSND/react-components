import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Icon.scss'

const Icon = ({
  children,
  className,
  width,
  height,
  color,
  ...attrs
}) => {
  const classes = classNames(
    'icon',
    className,
  )

  const iconStyle = {
    width: width || null,
    height: height || null,
    fill: color || null,
  }

  return (
    <div className={classes} style={iconStyle} {...attrs}>
      {children}
    </div>
  )
}

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

Icon.defaultProps = {
  children: null,
  className: '',
  width: 50,
  height: 50,
}

export default Icon
