export default (theme) => ({
    root: {
        position: 'relative',
        boxSizing: 'border-box',
        backgroundColor: theme.colors.white,
        padding: '0 10px 5px',
        width: '100%',
        borderBottom: `1px solid ${theme.colors.darkGrey}`,
        ...theme.text.default,
    },
    textarea: {
        outline: 'none',
    },
});
