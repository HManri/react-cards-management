export default (theme) => ({
    root: {
        textAlign: 'center',
        margin: '0 20px',
    },
    title: {
        ...theme.text.title,
    },
    field: {
        '&:not(:first-child)': {
            marginTop: '20px',
        },
    },
    error: {
        '& > input, & > textarea': {
            borderColor: theme.colors.red,
        },
    },
    button: {
        marginTop: '40px',
        display: 'inline-block',
        lineHeight: '20px',
    },
});
