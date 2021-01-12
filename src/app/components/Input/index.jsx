import React, { memo, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Input = memo(
    ({
        type = 'text',
        placeholder = '',
        multiline = false,
        rows = 3,
        className,
        value = '',
        onChange,
    }) => {
        const [inputValue, setInputValue] = useState(value || null);

        const theme = useTheme();
        const classes = useStyles({ theme });
        const rootClassName = classnames('input', classes.root, className, {
            [classes.textarea]: multiline,
        });

        const onChangeInput = useCallback(
            (event) => {
                const text = event.target.value;
                setInputValue(text);
                onChange && onChange(text);
            },
            [onChange],
        );

        const finalInputValue = useMemo(() => {
            if (!inputValue && inputValue !== '') return value;
            return inputValue;
        }, [value, inputValue]);

        const commonProps = useMemo(() => {
            return {
                className: rootClassName,
                placeholder,
                value: finalInputValue,
                onChange: onChangeInput,
            };
        }, [rootClassName, placeholder, finalInputValue, onChangeInput]);

        if (multiline) {
            return <textarea {...commonProps} rows={rows} />;
        }

        return <input {...commonProps} type={type} />;
    },
);

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
