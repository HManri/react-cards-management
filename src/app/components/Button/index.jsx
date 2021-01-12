import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Button = memo(({ shape, color, className, onClick, children }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const rootClassName = classnames(
        'button-round',
        classes.root,
        classes[shape],
        classes[color],
        className,
    );

    return (
        <div className={rootClassName} onClick={onClick}>
            {children}
        </div>
    );
});

Button.defaultProps = {
    shape: 'square',
    color: 'primary',
};

Button.propTypes = {
    shape: PropTypes.oneOf(['round', 'square']),
    color: PropTypes.oneOf(['primary', 'default']),
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;
