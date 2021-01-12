export default (theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.text.default,
        height: '20px',
        lineHeight: '20px',
        padding: '5px 20px',
        cursor: 'pointer',
        boxShadow: '0 3px 9px 0 rgba(0, 0, 0, 0.25)',
        whiteSpace: 'nowrap',

        '& > svg': {
            display: 'block',
            width: '100%',
            fill: theme.colors.white,
        },
    },
    square: {
        borderRadius: '5px',
    },
    round: {
        borderRadius: '50%',
    },
    primary: {
        backgroundColor: theme.colors.red,
        color: theme.colors.white,

        '&:hover': {
            backgroundColor: theme.colors.darkRed,
        },
    },
    default: {
        backgroundColor: theme.colors.lightGrey,
        color: theme.colors.text,

        '&:hover': {
            backgroundColor: theme.colors.grey,
        },
    },
});
