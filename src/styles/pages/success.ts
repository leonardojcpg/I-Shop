import {styled} from '..'

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$xxl',
        height: '4rem',
        color: '$grey100',
    },

    p: {
        fontSize: '$xl',
        color: '$grey300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        
    },

    a: {
        display: 'block',
        margin: '5rem',
        color: '$green500',
        fontSize: '$lg',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover' : {
            color: '$green300',
        }
    },
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 130,
    height: 145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },
})