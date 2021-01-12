import React, { memo, useMemo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { CardsActions } from 'actions';
import { sortByField } from 'utils';
import { SORT_ASC, SORT_DESC, SORT_STATES } from 'constants/Utils';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Plus from 'components/Icons/Plus';
import Arrow from 'components/Icons/Arrow';
import Card from './Card';
import Form from './Form';
import styles from './styles';

const mapStateToProps = (state) => {
    return {
        cards: state.cards.list || [],
        sortBy: state.cards.sortBy || null,
        sortDirection: state.cards.sortDirection || null,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: bindActionCreators(CardsActions, dispatch).deleteCard,
        sortCards: bindActionCreators(CardsActions, dispatch).sortCards,
    };
};

const useStyles = createUseStyles(styles);

const Board = memo(({ cards, sortBy, sortDirection, deleteCard, sortCards }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editCard, setEditCard] = useState(null);

    const theme = useTheme();
    const classes = useStyles({ theme });
    const rootClassName = classnames('react-cards-management__board', classes.root);
    const actionsClassName = classnames('react-cards-management__board__actions', classes.actions);
    const actionsTitleClassName = classnames(
        'react-cards-management__board__actions__title',
        classes['action-title'],
    );
    const sortByTitleClassName = classnames(
        'react-cards-management__board__actions__sort-button',
        'react-cards-management__board__actions__sort-button--title',
        classes['action-button'],
    );
    const sortByCreation = classnames(
        'react-cards-management__board__actions__sort-button',
        'react-cards-management__board__actions__sort-button--creation',
        classes['action-button'],
    );
    const arrowClassName = classnames(
        'react-cards-management__board__actions__sort-button__direction',
        classes['sort-arrow'],
        {
            [classes['arrow-asc']]: sortDirection === SORT_ASC,
            [classes['arrow-desc']]: sortDirection === SORT_DESC,
        },
    );
    const cardsClassName = classnames('react-cards-management__board__cards', classes.cards);
    const cardClassName = classnames('react-cards-management__board__cards__card', classes.card);
    const addButtonClassName = classnames(
        'react-cards-management__board__add-button',
        classes['add-button'],
    );

    const onEditCard = useCallback(
        (id) => () => {
            const card = cards.find((card) => card.id === id);
            if (!card) return;
            setEditCard(card);
            setIsModalOpen(true);
        },
        [cards],
    );

    const onDeleteCard = useCallback(
        (id) => () => {
            deleteCard(id);
        },
        [deleteCard],
    );

    const onSortCards = useCallback(
        (field) => () => {
            let nextIndex;
            if (sortBy === field) {
                // next state of sort
                const currentIndex = SORT_STATES.indexOf(sortDirection);
                if (currentIndex === -1) nextIndex = 1;
                else nextIndex = (currentIndex + 1) % SORT_STATES.length;
            } else {
                // new field sort, start from the beginning,
                // so first state of SORT_STATES (real first, not null one)
                nextIndex = 1;
            }
            sortCards(field, SORT_STATES[nextIndex]);
        },
        [sortBy, sortDirection, sortCards],
    );

    const onClickAddCard = useCallback(() => {
        setEditCard(null);
        setIsModalOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
        if (editCard) setEditCard(null);
    }, [editCard]);

    const htmlCards = useMemo(() => {
        // let sortedCards;
        // if (
        //     sortBy &&
        //     sortDirection &&
        //     sortedCards?.length > 0 &&
        //     sortedCards[0].hasOwnProperty(sortBy)
        // ) {
        //     sortedCards = ;
        // } else sortedCards = cards;

        // return sortedCards.map((card, index) => (
        //     <Card
        //         key={index}
        //         className={cardClassName}
        //         data={card}
        //         onEditCard={onEditCard(card.id)}
        //         onDeleteCard={onDeleteCard(card.id)}
        //     />
        // ));
        return sortByField(cards, sortBy, sortDirection).map((card, index) => (
            <Card
                key={index}
                className={cardClassName}
                data={card}
                onEditCard={onEditCard(card.id)}
                onDeleteCard={onDeleteCard(card.id)}
            />
        ));
    }, [cards, cardClassName, onEditCard, onDeleteCard, sortBy, sortDirection]);

    return (
        <div className={rootClassName}>
            <div className={actionsClassName}>
                <div className={actionsTitleClassName}>Sort by:</div>
                <Button
                    className={sortByTitleClassName}
                    color="default"
                    onClick={onSortCards('title')}
                >
                    <span>Title</span>
                    {sortBy === 'title' && sortDirection && (
                        <span className={arrowClassName}>
                            <Arrow />
                        </span>
                    )}
                </Button>
                <Button
                    className={sortByCreation}
                    color="default"
                    onClick={onSortCards('creation')}
                >
                    <span>Creation date</span>
                    {sortBy === 'creation' && sortDirection && (
                        <span className={arrowClassName}>
                            <Arrow />
                        </span>
                    )}
                </Button>
            </div>
            <div className={cardsClassName}>{htmlCards}</div>
            <Button className={addButtonClassName} shape="round" onClick={onClickAddCard}>
                <Plus />
            </Button>
            <Modal open={isModalOpen} onCloseModal={onCloseModal}>
                <Form onSave={onCloseModal} data={editCard} />
            </Modal>
        </div>
    );
});

Board.propTypes = {
    cards: PropTypes.array,
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string,
    deleteCard: PropTypes.func,
    sortCards: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
