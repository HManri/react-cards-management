import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import Edit from 'components/Icons/Edit';
import Delete from 'components/Icons/Delete';
import styles from './styles/card';

const useStyles = createUseStyles(styles);

const Card = memo(({ className, data, onEditCard, onDeleteCard }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const rootClassName = classnames(
        'react-cards-management__board__card',
        classes.root,
        className,
    );
    const titleClassName = classnames('react-cards-management__board__card__title', classes.title);
    const imageClassName = classnames(
        'react-cards-management__board__card__title__image',
        classes.image,
        {
            [classes['image-background']]: !data.url,
        },
    );
    const titleTextClassName = classnames(
        'react-cards-management__board__card__title__text',
        classes['title-text'],
        { [classes['title-text-no-url']]: !data.url },
    );
    const actionsButtonsClassName = classnames(
        'react-cards-management__board__card__action-buttons',
        classes['action-buttons'],
    );
    const editButtonClassName = classnames(
        'react-cards-management__board__card__action-buttons__edit',
        classes.edit,
        classes['action-button'],
    );
    const deleteButtonClassName = classnames(
        'react-cards-management__board__card__action-buttons__delete',
        classes.delete,
        classes['action-button'],
    );
    const descriptionClassName = classnames(
        'react-cards-management__board__card__description',
        classes.description,
    );

    return (
        <div className={rootClassName}>
            <div className={titleClassName}>
                <div className={imageClassName}>
                    {data.url && <img src={data.url} alt={data.url} />}
                </div>
                <div className={titleTextClassName}>{data.title}</div>
                <div className={actionsButtonsClassName}>
                    <div className={editButtonClassName} onClick={onEditCard}>
                        <Edit />
                    </div>
                    <div className={deleteButtonClassName} onClick={onDeleteCard}>
                        <Delete />
                    </div>
                </div>
            </div>
            {data.description && <div className={descriptionClassName}>{data.description}</div>}
        </div>
    );
});

Card.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    onEditCard: PropTypes.func,
    onDeleteCard: PropTypes.func,
};

export default Card;
