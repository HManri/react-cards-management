export default (theme) => ({
    root: {
        position: 'relative',
        padding: '20px',
        width: '100%',
        boxSizing: 'border-box',
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    'action-title': {
        ...theme.text.big,
        marginRight: '20px',
        flexGrow: '1',
        flexShrink: '0',
    },
    'action-button': {
        display: 'flex',
        alignItems: 'center',
        ...theme.text.big,
        lineHeight: '20px',
        userSelect: 'none',

        '&:not(:last-child)': {
            marginRight: '10px',
        },
    },
    'sort-arrow': {
        width: '12px',
        marginLeft: '5px',
        transition: 'transform 300ms ease-in-out',

        '& > svg': {
            display: 'block',
            width: '100%',
        },
    },
    'arrow-asc': {
        transform: 'rotate(-90deg)',
    },
    'arrow-desc': {
        transform: 'rotate(90deg)',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        boxSizing: 'border-box',
    },
    card: {
        margin: '0 10px 20px 0',

        '@media (max-width: 720px)': {
            width: '100%',
            margin: '0 0 20px',

            '& img': {
                alignSelf: 'flex-start',
            },
        },
    },
    'add-button': {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '20px',
        padding: '15px',
    },
});
