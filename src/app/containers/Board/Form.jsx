import React, { memo, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { CardsActions } from 'actions';
import Input from 'components/Input';
import Button from 'components/Button';
import { checkFieldMandatory } from 'utils';
import styles from './styles/form';

const FormSchema = [
    { id: 'title', type: 'text', mandatory: true, placeholder: 'Title' },
    { id: 'description', type: 'textarea', mandatory: true, placeholder: 'Description', rows: 3 },
    { id: 'url', type: 'text', mandatory: false, placeholder: 'Image (URL)' },
];

const mapDispatchToProps = (dispatch) => {
    return {
        saveCard: bindActionCreators(CardsActions, dispatch).saveCard,
    };
};

const useStyles = createUseStyles(styles);

const Form = memo(({ data, onSave, saveCard }) => {
    const [formData, setFormData] = useState({
        id: data?.id || -1,
        title: data?.title || '',
        description: data?.description || '',
        url: data?.url || '',
        creation: data?.creation || null,
    });
    const [errors, setErrors] = useState(
        FormSchema.reduce((obj, field) => {
            if (field.mandatory) obj[field.id] = false;
            return obj;
        }, {}),
    );

    const theme = useTheme();
    const classes = useStyles({ theme });
    const rootClassName = classnames('react-cards-management__board__form', classes.root);
    const titleClassName = classnames('react-cards-management__board__form__title', classes.title);
    const buttonClassName = classnames(
        'react-cards-management__board__form__button',
        classes.button,
    );

    const updateForm = useCallback(
        (field) => (value) => {
            setFormData({ ...formData, [field]: value });
        },
        [formData],
    );

    const saveForm = useCallback(() => {
        let formErrors = [];
        let hasAnError = false;
        FormSchema.forEach((field) => {
            if (field.mandatory && !checkFieldMandatory(formData[field.id])) {
                formErrors[field.id] = true;
                hasAnError = true;
            }
        });
        setErrors({ ...errors, ...formErrors });

        if (hasAnError) return;

        saveCard(formData)
            .then(() => {
                onSave && onSave();
            })
            .catch((error) => {
                console.error('error saving the card:', error);
            });
    }, [formData, errors, saveCard, onSave]);

    const Fields = useMemo(() => {
        return FormSchema.map((field, index) => {
            const fieldClassName = classnames(
                'react-cards-management__board__form__field',
                classes.field,
                {
                    [classes.error]: errors[field.id],
                },
            );
            switch (field.type) {
                case 'text':
                    return (
                        <div key={index} className={fieldClassName}>
                            <Input
                                placeholder={field.placeholder}
                                onChange={updateForm(field.id)}
                                value={formData[field.id]}
                            />
                        </div>
                    );
                case 'textarea':
                    return (
                        <div key={index} className={fieldClassName}>
                            <Input
                                placeholder={field.placeholder}
                                multiline
                                rows={field.rows || 3}
                                onChange={updateForm(field.id)}
                                value={formData[field.id]}
                            />
                        </div>
                    );
                default:
                    return null;
            }
        });
    }, [errors, classes.error, classes.field, formData, updateForm]);

    return (
        <div className={rootClassName}>
            <div className={titleClassName}>New card</div>
            {Fields}
            <Button className={buttonClassName} onClick={saveForm}>
                Add
            </Button>
        </div>
    );
});

Form.propTypes = {
    data: PropTypes.object,
    saveCard: PropTypes.func,
    onSave: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Form);
