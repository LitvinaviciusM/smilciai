import {createGlobalStyle} from "styled-components";

import MontBlackTtf from './mont/Mont-Black.ttf'
import MontBoldTtf from './mont/Mont-Bold.ttf'
import MontHeavyTtf from './mont/Mont-Heavy.ttf'
import MontLightTtf from './mont/Mont-Light.ttf'
import MontRegularTtf from './mont/Mont-Regular.ttf'
import MontSemiBoldTtf from './mont/Mont-SemiBold.ttf'
import MontExtraLightTtf from './mont/Mont-ExtraLight.ttf'
import MontThinTtf from './mont/Mont-Thin.ttf'



export const GlobalFonts = createGlobalStyle`

@font-face {
    font-family: 'Mont';
    src: url(${MontBlackTtf}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Mont';
    src: url(${MontBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Mont';
    src: url(${MontHeavyTtf}) format('truetype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Mont';
    src: url(${MontLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Mont';
    src: url(${MontRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Mont';
    src: url(${MontSemiBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Mont';
    src: url(${MontExtraLightTtf}) format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Mont';
    src: url(${MontThinTtf}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

`

