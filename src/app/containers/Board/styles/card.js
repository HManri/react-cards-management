export default (theme) => ({
    root: {
        position: 'relative',
        minWidth: '300px',
        width: '300px',
        borderRadius: '5px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.55)',
        backgroundColor: theme.colors.white,

        '&:hover $action-button': {
            display: 'block',
        },
    },
    title: {
        position: 'relative',
        borderBottom: `1px solid ${theme.colors.border}`,
    },
    image: {
        display: 'flex',
        alignItems: 'center',
        height: '200px',
        overflow: 'hidden',
        backgroundColor: theme.colors.black,

        '& > img': {
            display: 'block',
            width: '100%',
            height: 'auto',
        },
    },
    'image-background': {
        background: `${theme.colors.white} url(images/default-image_300.png) no-repeat center center`,
    },
    'title-text': {
        position: 'absolute',
        left: '0',
        bottom: '15px',
        padding: '0 15px',
        ...theme.text.big,
        color: theme.colors.white,
    },
    'action-buttons': {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        right: '15px',
        bottom: '15px',
    },
    'action-button': {
        display: 'none',
        width: '18px',
        backgroundColor: theme.colors.white,
        padding: '5px',
        borderRadius: '50%',
        cursor: 'pointer',

        '&:not(:last-child)': {
            marginRight: '10px',
        },
    },
    'title-text-no-url': {
        color: theme.colors.text,
    },
    description: {
        backgroundColor: theme.colors.white,
        padding: '15px',
        ...theme.text.default,
    },
});
