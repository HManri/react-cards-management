export default {
    '@global': {
        html: {
            width: '100%',
            minWidth: 'fit-content',
            height: '100%',
            fontFamily: `Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif`,
        },
        body: {
            width: '100%',
            minWidth: 'fit-content',
            minHeight: '100%',
            height: '100%',
            fontFamily: `Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif`,
        },
        'input, label, select, button, textarea': {
            margin: 0,
            border: 0,
            padding: 0,
            whiteSpace: 'normal',
            background: 'none',
            lineHeight: 1,
        },
        'input:focus, audio': {
            outline: 0,
        },
        '#app': {
            width: '100%',
            height: '100%',
            backgroundColor: '#f1f9f9',
            overflow: 'auto',
        },
    },
    'react-cards-management': {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        padding: '20px',
    },
};
