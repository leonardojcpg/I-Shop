import {createStitches} from '@stitches/react'

export const {
config,
styled,
globalCss,
keyframes,
getCssText,
theme,
createTheme
} = createStitches({
    theme: {
        colors: {
            white: '#fff',

            grey900: '#121214',
            grey800: '#282024',
            grey300: '#c4c4cc',
            grey100: '#e1e1e6',

            green500: '#00875f',
            green300: '#00b37e',
        },

        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            xxl: '2rem',
        },
    }
})